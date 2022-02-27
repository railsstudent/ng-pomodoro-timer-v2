import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  ViewContainerRef,
  ChangeDetectorRef,
  ComponentRef,
} from '@angular/core'
import {
  EMPTY,
  filter,
  fromEvent,
  map,
  mapTo,
  merge,
  repeat,
  scan,
  startWith,
  Subscription,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from 'rxjs'
import { STATUS } from '../enums'
import { BUTTON_STATE_MAP } from './timer-buttons.constant'
import { ButtonActions } from './timer-buttons.interface'

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer">
        <ng-container *ngIf="debugMode">{{ value || 0 }}</ng-container>
      </span>
      <div class="spacer flex justify-evenly">
        <button class="start button" aria-label="start timer" #start>
          <ng-container #playRef></ng-container>
        </button>
        <button class="pause button" aria-label="pause timer" #pause>
          <ng-container #pauseRef></ng-container>
        </button>
        <button class="stop button" aria-label="stop timer" #stop>
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
  @ViewChild('start', { read: ElementRef, static: true })
  btnStart: ElementRef

  @ViewChild('stop', { read: ElementRef, static: true })
  btnStop: ElementRef

  @ViewChild('pause', { read: ElementRef, static: true })
  btnPause: ElementRef

  @ViewChild('playRef', { read: ViewContainerRef, static: true })
  playRef: ViewContainerRef

  @ViewChild('pauseRef', { read: ViewContainerRef, static: true })
  pauseRef: ViewContainerRef

  @ViewChild('stopRef', { read: ViewContainerRef, static: true })
  stopRef: ViewContainerRef

  @Input()
  countDownSeconds: number

  @Input()
  debugMode = false

  @Output()
  statusChange = new EventEmitter<string>()

  @Output()
  updateRemainingSeconds = new EventEmitter<number>()

  subscription: Subscription

  value: number

  componentRefs: ComponentRef<unknown>[] = []

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    this.value = this.countDownSeconds
    await this.setupIcons()
    this.subscription = this.createTimerSubscription()
  }

  private clickEventMapTo(elementRef: ElementRef, status: STATUS) {
    return fromEvent(elementRef.nativeElement, 'click').pipe(mapTo(status))
  }

  private createTimerSubscription() {
    const btnStartClicked$ = this.clickEventMapTo(this.btnStart, STATUS.RUNNING)
    const btnStopClicked$ = fromEvent(this.btnStop.nativeElement, 'click').pipe(
      mapTo(STATUS.STOP),
      tap(() => this.statusChange.emit(STATUS.STOP)),
    )
    const btnPauseClicked$ = this.clickEventMapTo(this.btnPause, STATUS.PAUSE)

    const initialState: ButtonActions = { status: undefined, previousStatus: undefined }
    return merge(btnStartClicked$, btnPauseClicked$)
      .pipe(
        scan((acc: ButtonActions, value: STATUS) => this.updateNextMove(acc, value), initialState),
        filter((buttonActions) => this.isButtonActionAllowed(buttonActions)),
        map((buttonActions) => buttonActions.status || STATUS.PAUSE),
        tap((status) => this.statusChange.emit(status)),
        switchMap((status) => (status === STATUS.RUNNING ? timer(0, 1000) : EMPTY)),
        mapTo(-1),
        scan((acc, value) => acc + value, this.countDownSeconds),
        takeWhile((value) => value >= 0),
        takeUntil(btnStopClicked$),
        startWith(this.countDownSeconds),
        repeat(),
      )
      .subscribe((value) => {
        if (typeof value === 'number') {
          this.value = value
          this.updateRemainingSeconds.emit(value)
        }
      })
  }

  private updateNextMove(acc: ButtonActions, status: STATUS): ButtonActions {
    return {
      status,
      previousStatus: acc.status,
    }
  }

  async setupIcons() {
    const { faPlay, faPause, faUndo } = await import('@fortawesome/free-solid-svg-icons')
    const componentRefs = await Promise.all([
      this.renderIcon(this.playRef, faPlay),
      this.renderIcon(this.pauseRef, faPause),
      this.renderIcon(this.stopRef, faUndo),
    ])

    this.componentRefs.push(...componentRefs)
    this.cdr.detectChanges()
  }

  private async renderIcon(vcf: ViewContainerRef, icon: IconDefinition) {
    if (vcf) {
      vcf.clear()
    }

    const FaIconComponent = (await import('@fortawesome/angular-fontawesome')).FaIconComponent
    const componentRef = vcf.createComponent(FaIconComponent)
    componentRef.instance.icon = icon
    componentRef.instance.render()
    return componentRef
  }

  isButtonActionAllowed({ status, previousStatus }: ButtonActions) {
    if (!status) {
      return false
    }

    if (previousStatus) {
      const allowedStatus = BUTTON_STATE_MAP[previousStatus]
      return allowedStatus.includes(status)
    }
    return status == STATUS.RUNNING
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }

    for (const ref of this.componentRefs) {
      if (ref && ref.destroy) {
        ref.destroy()
      }
    }
  }
}
