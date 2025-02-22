import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core'
import { TimerMessageComponent } from '../timer-message/timer-message.component'
import { TimerDisplayComponent } from '../timer-display/timer-display.component'
import { TimerButtonsComponent } from '../timer-buttons/timer-buttons.component'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400 flex flex-col justify-center">
      <div>
        <app-timer-message class="mb-6" [status]="status"></app-timer-message>
        <app-timer-display class="mb-8" [totalSeconds]="displaySeconds"></app-timer-display>
        <app-timer-buttons
          [debugMode]="true"
          [countDownSeconds]="totalSeconds()"
          (statusChange)="statusChange($event)"
          (updateRemainingSeconds)="updateRemainingSeconds($event)"
        ></app-timer-buttons>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimerMessageComponent, TimerDisplayComponent, TimerButtonsComponent],
})
export class TimerShellComponent implements OnInit {
  readonly totalSeconds = input(900)

  status = 'STOP'

  displaySeconds: number

  ngOnInit(): void {
    this.displaySeconds = this.totalSeconds()
  }

  statusChange(otherStatus: string) {
    this.status = otherStatus
  }

  updateRemainingSeconds(secondsRemained: number) {
    this.displaySeconds = secondsRemained
  }
}
