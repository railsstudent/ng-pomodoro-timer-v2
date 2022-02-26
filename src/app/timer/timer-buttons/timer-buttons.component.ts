import { Component, ChangeDetectionStrategy, ViewChild, OnInit, ElementRef, OnDestroy, Output, EventEmitter, Input } from '@angular/core'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'
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
      <span class="spacer">{{ debugMode ? value : '' }}</span>
      <div class="spacer flex justify-evenly">
        <button class="start button" aria-label="start timer" #start>
          <fa-icon [icon]="faPlay"></fa-icon>
        </button>
        <button class="pause button" aria-label="pause timer" #pause>
          <fa-icon [icon]="faPause"></fa-icon>
        </button>
        <button class="stop button" aria-label="stop timer" #stop>
          <fa-icon [icon]="faStop"></fa-icon>
        </button>
      </div>
      <span class="spacer"></span>
    </div>
  `,
  styleUrls: ['./timer-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerButtonsComponent implements OnInit, OnDestroy {
  faPlay = faPlay
  faStop = faStop
  faPause = faPause

  @ViewChild('start', { read: ElementRef, static: true })
  btnStart: ElementRef

  @ViewChild('stop', { read: ElementRef, static: true })
  btnStop: ElementRef

  @ViewChild('pause', { read: ElementRef, static: true })
  btnPause: ElementRef

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

  ngOnInit(): void {
    const btnStartClicked$ = fromEvent(this.btnStart.nativeElement, 'click').pipe(mapTo(STATUS.RUNNING))
    const btnStopClicked$ = fromEvent(this.btnStop.nativeElement, 'click').pipe(
      mapTo(STATUS.STOP),
      tap(() => this.statusChange.emit(STATUS.STOP)),
    )
    const btnPauseClicked$ = fromEvent(this.btnPause.nativeElement, 'click').pipe(mapTo(STATUS.PAUSE))

    this.subscription = merge(btnStartClicked$, btnPauseClicked$)
      .pipe(
        scan(
          (acc: ButtonActions, status) => ({
            status,
            previousStatus: acc.status,
          }),
          { status: undefined, previousStatus: undefined },
        ),
        filter((buttonActions) => this.isButtonActionAllowed(buttonActions)),
        map((buttonActions) => buttonActions.status || STATUS.PAUSE),
        tap((status) => {
          this.statusChange.emit(status)
        }),
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
  }
}
