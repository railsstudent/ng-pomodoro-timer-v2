import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400 flex flex-col justify-center">
      <div>
        <app-timer-message class="mb-2" [status]="status"></app-timer-message>
        <app-timer-display class="mb-4" [totalSeconds]="totalSeconds"></app-timer-display>
        <app-timer-buttons></app-timer-buttons>
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

  status = 'STOP'
}
