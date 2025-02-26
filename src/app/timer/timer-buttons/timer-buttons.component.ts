import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  DestroyRef,
  inject,
  input,
  linkedSignal,
  OnDestroy,
  OnInit,
  output,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { outputFromObservable, takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { filter, NEVER, of, repeat, scan, shareReplay, startWith, switchMap, takeWhile, timer } from 'rxjs';
import { STATUS } from '../status.type';

const oneSecond = 1000;
const BUTTON_STATE_MAP: Record<STATUS, STATUS[]> = {
  RUNNING: ['STOP', 'PAUSE'],
  PAUSE: ['RUNNING', 'STOP'],
  STOP: ['RUNNING'],
};

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

  value = linkedSignal(() => this.countDownSeconds());
  status = signal<STATUS>('STOP');
  nextStatus = linkedSignal<STATUS, STATUS>({
    source: this.status,
    computation: (source, previous) => {
      if (!previous?.value) {
        return source;
      }

      return BUTTON_STATE_MAP[previous.value].includes(source) ? source : previous.value;
    },
  });

  status$ = toObservable(this.nextStatus).pipe(shareReplay({ bufferSize: 1, refCount: true }));

  readonly statusChange = outputFromObservable(this.status$);
  readonly updateRemainingSeconds = output<number>();

  playComponentRef: ComponentRef<unknown>;
  pauseComponentRef: ComponentRef<unknown>;
  stopComponentRef: ComponentRef<unknown>;

  destroyRef$ = inject(DestroyRef);

  async ngOnInit(): Promise<void> {
    await this.setupIcons();

    const countDownInterval = -1;
    this.status$
      .pipe(
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
        filter((value) => typeof value === 'number'),
        startWith(this.countDownSeconds()),
        repeat(),
        takeUntilDestroyed(this.destroyRef$),
      )
      .subscribe((value) => {
        this.updateRemainingSeconds.emit(value);
        this.value.set(value);
        if (value === 0) {
          this.status.set('STOP');
        }
      });
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
    componentRef.setInput('icon', icon);
    componentRef.instance.render();
    return componentRef;
  }

  ngOnDestroy(): void {
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
