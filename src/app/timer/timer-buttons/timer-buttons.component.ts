import { Component, ChangeDetectionStrategy, ViewChild, OnInit, ElementRef, OnDestroy } from '@angular/core'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'
import { EMPTY, fromEvent, mapTo, merge, scan, startWith, Subscription, switchMap, tap, timer } from 'rxjs'
import { STATUS } from '../enums'

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer"></span>
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

  subscription: Subscription

  ngOnInit(): void {
    const btnStartClicked$ = fromEvent(this.btnStart.nativeElement, 'click').pipe(mapTo(STATUS.RUNNING))
    const btnStopClicked$ = fromEvent(this.btnStop.nativeElement, 'click').pipe(mapTo(STATUS.STOP))
    const btnPauseClicked$ = fromEvent(this.btnPause.nativeElement, 'click').pipe(mapTo(STATUS.PAUSE))

    this.subscription = merge(btnStartClicked$, btnStopClicked$, btnPauseClicked$)
      .pipe(
        startWith(STATUS.STOP),
        switchMap((status) => {
          if (status === STATUS.RUNNING) {
            return timer(0, 1000)
          }
          return EMPTY
        }),
        tap(console.log),
        scan((acc) => acc + 1, 0),
      )
      .subscribe(console.log)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
