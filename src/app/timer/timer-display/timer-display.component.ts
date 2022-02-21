import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-display',
  template: `
    <div class="p-4">
      <p class="text-[12rem] text-pink-800 text-center">
        {{ totalSeconds | convertSecondsToString }}
      </p>
    </div>
  `,
  styleUrls: ['./timer-display.component.scss'],
})
export class TimerDisplayComponent {
  @Input()
  totalSeconds: number
}
