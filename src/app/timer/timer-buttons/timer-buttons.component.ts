import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
  OnDestroy,
  ViewContainerRef,
  ComponentRef,
  input,
  output,
  viewChild,
} from '@angular/core'
import {
  filter,
  fromEvent,
  map,
  merge,
  NEVER,
  of,
  repeat,
  scan,
  startWith,
  Subscription,
  switchMap,
  takeWhile,
  tap,
  timer,
  withLatestFrom,
} from 'rxjs'
import { STATUS } from '../enums'
import { BUTTON_STATE_MAP } from './timer-buttons.constant'
import { ButtonActions } from './timer-buttons.interface'

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer">
        @if (debugMode()) {
          {{ value || 0 }}
        }
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
  imports: [],
})
export class TimerButtonsComponent implements OnInit, OnDestroy {
  readonly btnStart = viewChild.required('start', { read: ElementRef })

  readonly btnStop = viewChild.required('stop', { read: ElementRef })

  readonly btnPause = viewChild.required('pause', { read: ElementRef })

  readonly playRef = viewChild.required('playRef', { read: ViewContainerRef })

  readonly pauseRef = viewChild.required('pauseRef', { read: ViewContainerRef })

  readonly stopRef = viewChild.required('stopRef', { read: ViewContainerRef })

  readonly countDownSeconds = input.required<number>()

  readonly debugMode = input(false)

  readonly statusChange = output<string>()

  readonly updateRemainingSeconds = output<number>()

  subscription: Subscription

  value: number

  playComponentRef: ComponentRef<unknown>
  pauseComponentRef: ComponentRef<unknown>
  stopComponentRef: ComponentRef<unknown>

  async ngOnInit(): Promise<void> {
    this.value = this.countDownSeconds()
    await this.setupIcons()
    this.subscription = this.createTimerSubscription()
  }

  private clickEventMapTo(elementRef: ElementRef, status: STATUS) {
    return fromEvent(elementRef.nativeElement, 'click').pipe(map(() => status))
  }

  private createTimerSubscription() {
    const initialState: ButtonActions = { status: STATUS.STOP, previousStatus: undefined }
    const oneSecond = 1000
    const countDownInterval = -1

    const btnStartClicked$ = this.clickEventMapTo(this.btnStart(), STATUS.RUNNING)
    const btnStopClicked$ = this.clickEventMapTo(this.btnStop(), STATUS.STOP)
    const btnPauseClicked$ = this.clickEventMapTo(this.btnPause(), STATUS.PAUSE)
    const buttonClicked$ = merge(btnStartClicked$, btnPauseClicked$, btnStopClicked$)

    return buttonClicked$
      .pipe(
        scan((acc: ButtonActions, value: STATUS) => this.updateNextMove(acc, value), initialState),
        filter((buttonActions) => this.isButtonActionAllowed(buttonActions)),
        map((buttonActions) => buttonActions.status),
        tap((status) => this.statusChange.emit(status)),
        switchMap((status) => {
          if (status === STATUS.STOP) {
            return of(this.countDownSeconds())
          } else if (status === STATUS.RUNNING) {
            return timer(0, oneSecond)
          }
          return NEVER
        }),
        withLatestFrom(buttonClicked$),
        switchMap(([resetSeconds, state]) => of(state === STATUS.STOP ? resetSeconds : countDownInterval)),
        scan((acc, value) => (countDownInterval === value ? acc + value : value), this.countDownSeconds()),
        takeWhile((value) => value >= 0),
        startWith(this.countDownSeconds()),
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
      this.renderIcon(this.playRef(), faPlay),
      this.renderIcon(this.pauseRef(), faPause),
      this.renderIcon(this.stopRef(), faUndo),
    ])

    this.playComponentRef = componentRefs[0]
    this.pauseComponentRef = componentRefs[1]
    this.stopComponentRef = componentRefs[2]
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

    if (this.playComponentRef && this.playComponentRef.destroy) {
      this.playComponentRef.destroy()
    }

    if (this.pauseComponentRef && this.pauseComponentRef.destroy) {
      this.pauseComponentRef.destroy()
    }

    if (this.stopComponentRef && this.stopComponentRef.destroy) {
      this.stopComponentRef.destroy()
    }
  }
}
