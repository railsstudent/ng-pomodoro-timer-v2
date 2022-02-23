import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { STATUS } from '../enums'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400 flex flex-col justify-center">
      <div>
        <app-timer-message [status]="status"></app-timer-message>
        <app-timer-display [totalSeconds]="totalSeconds"></app-timer-display>
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
})
export class TimerShellComponent {
  @Input()
  totalSeconds = 900

  status = STATUS.STOP.toString()
}
