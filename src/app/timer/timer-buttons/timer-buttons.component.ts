import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  input,
  linkedSignal,
  OnDestroy,
  OnInit,
  output,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NEVER, of, repeat, scan, startWith, Subscription, switchMap, takeWhile, tap, timer } from 'rxjs';
import { STATUS } from '../status.type';
import { BUTTON_STATE_MAP } from './timer-buttons.constant';
import { toObservable } from '@angular/core/rxjs-interop';

const oneSecond = 1000;

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer">
        @if (debugMode()) {
          {{ value() || 0 }}
        }
      </span>
      <div class="spacer flex justify-evenly">
        <button class="start button" aria-label="start timer" (click)="status.set('RUNNING')">
          <ng-container #playRef></ng-container>
        </button>
        <button class="pause button" aria-label="pause timer" (click)="status.set('PAUSE')">
          <ng-container #pauseRef></ng-container>
        </button>
        <button class="stop button" aria-label="stop timer" (click)="status.set('STOP')">
          <ng-container #stopRef></ng-container>
        </button>
      </div>
      <span class="spacer"></span>
    </div>
  `,
  styleUrls: ['./timer-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerButtonsComponent implements OnInit, OnDestroy {
  readonly playRef = viewChild.required('playRef', { read: ViewContainerRef });
  readonly pauseRef = viewChild.required('pauseRef', { read: ViewContainerRef });
  readonly stopRef = viewChild.required('stopRef', { read: ViewContainerRef });
  readonly countDownSeconds = input.required<number>();
  readonly debugMode = input(false);
  readonly statusChange = output<STATUS>();
  readonly updateRemainingSeconds = output<number>();

  subscription: Subscription;

  value = linkedSignal(() => this.countDownSeconds());
  status = signal<STATUS>('STOP', {
    equal: (prev, curr) => !BUTTON_STATE_MAP[prev].includes(curr),
  });
  status$ = toObservable(this.status);

  playComponentRef: ComponentRef<unknown>;
  pauseComponentRef: ComponentRef<unknown>;
  stopComponentRef: ComponentRef<unknown>;

  async ngOnInit(): Promise<void> {
    await this.setupIcons();
    this.subscription = this.createTimerSubscription();
  }

  private createTimerSubscription() {
    const countDownInterval = -1;

    return this.status$
      .pipe(
        tap((status) => this.statusChange.emit(status)),
        switchMap((status) => {
          if (status === 'STOP') {
            return of(this.countDownSeconds());
          } else if (status === 'RUNNING') {
            return timer(0, oneSecond);
          }
          return NEVER;
        }),
        switchMap((resetSeconds) => of(this.status() === 'STOP' ? resetSeconds : countDownInterval)),
        scan((acc, value) => (countDownInterval === value ? acc + value : value), this.countDownSeconds()),
        takeWhile((value) => value >= 0),
        tap((value) => {
          if (typeof value === 'number') {
            this.value.set(value);
            this.updateRemainingSeconds.emit(value);
            if (value === 0) {
              this.status.set('STOP');
            }
          }
        }),
        startWith(this.countDownSeconds()),
        repeat(),
      )
      .subscribe();
  }

  async setupIcons() {
    const { faPlay, faPause, faUndo } = await import('@fortawesome/free-solid-svg-icons');
    const componentRefs = await Promise.all([
      this.renderIcon(this.playRef(), faPlay),
      this.renderIcon(this.pauseRef(), faPause),
      this.renderIcon(this.stopRef(), faUndo),
    ]);

    this.playComponentRef = componentRefs[0];
    this.pauseComponentRef = componentRefs[1];
    this.stopComponentRef = componentRefs[2];
  }

  private async renderIcon(vcf: ViewContainerRef, icon: IconDefinition) {
    if (vcf) {
      vcf.clear();
    }

    const FaIconComponent = (await import('@fortawesome/angular-fontawesome')).FaIconComponent;
    const componentRef = vcf.createComponent(FaIconComponent);
    componentRef.instance.icon = icon;
    componentRef.instance.render();
    return componentRef;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.playComponentRef && this.playComponentRef.destroy) {
      this.playComponentRef.destroy();
    }

    if (this.pauseComponentRef && this.pauseComponentRef.destroy) {
      this.pauseComponentRef.destroy();
    }

    if (this.stopComponentRef && this.stopComponentRef.destroy) {
      this.stopComponentRef.destroy();
    }
  }
}
