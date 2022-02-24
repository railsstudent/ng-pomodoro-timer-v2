import { Component, ChangeDetectionStrategy, ViewChild, OnInit, ElementRef, OnDestroy, Output, EventEmitter, Input } from '@angular/core'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'
import { EMPTY, fromEvent, mapTo, merge, scan, startWith, Subscription, switchMap, takeWhile, tap, timer } from 'rxjs'
import { STATUS } from '../enums'

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer">{{ value }}</span>
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

  @Output()
  statusChange = new EventEmitter<string>()

  @Output()
  resetTimer = new EventEmitter<number>()

  @Output()
  updateRemainingSeconds = new EventEmitter<number>()

  value: number

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const btnStartClicked$ = fromEvent(this.btnStart.nativeElement, 'click').pipe(mapTo(STATUS.RUNNING))
    const btnStopClicked$ = fromEvent(this.btnStop.nativeElement, 'click').pipe(mapTo(STATUS.STOP))
    const btnPauseClicked$ = fromEvent(this.btnPause.nativeElement, 'click').pipe(mapTo(STATUS.PAUSE))

    const subscription = merge(btnStartClicked$, btnPauseClicked$)
      .pipe(
        startWith(STATUS.STOP),
        tap((status) => {
          this.statusChange.emit(status)
        }),
        switchMap((status) => {
          if (status === STATUS.RUNNING) {
            return timer(0, 1000)
          }
          return EMPTY
        }),
        scan((acc) => acc - 1, this.countDownSeconds),
        takeWhile((value) => value >= 0),
      )
      .subscribe((value) => {
        this.value = value
        this.updateRemainingSeconds.emit(value)
      })

    const stopSubscription = btnStopClicked$
      .pipe(
        tap(() => {
          // unsubscribe timer
          subscription.unsubscribe()
        }),
      )
      .subscribe()

    this.subscriptions.push(subscription)
    this.subscriptions.push(stopSubscription)
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe()
    }
  }
}
