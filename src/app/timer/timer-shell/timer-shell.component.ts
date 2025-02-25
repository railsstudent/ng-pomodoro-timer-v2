import { ChangeDetectionStrategy, Component, input, linkedSignal, signal } from '@angular/core'
import { TimerMessageComponent } from '../timer-message/timer-message.component'
import { TimerDisplayComponent } from '../timer-display/timer-display.component'
import { TimerButtonsComponent } from '../timer-buttons/timer-buttons.component'
import { STATUS } from '../status.type'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400 flex flex-col justify-center">
      <div>
        <app-timer-message class="mb-6" [status]="status()"></app-timer-message>
        <app-timer-display class="mb-8" [totalSeconds]="displaySeconds()"></app-timer-display>
        <app-timer-buttons
          [debugMode]="true"
          [countDownSeconds]="totalSeconds()"
          (statusChange)="status.set($event)"
          (updateRemainingSeconds)="displaySeconds.set($event)"
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
export class TimerShellComponent {
  readonly totalSeconds = input(60)
  status = signal<STATUS>('STOP')
  displaySeconds = linkedSignal(() => this.totalSeconds())
}
