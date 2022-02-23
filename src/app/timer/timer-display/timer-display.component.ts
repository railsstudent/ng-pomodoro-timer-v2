import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-display',
  template: `
    <div class="p-4">
      <p class="text-[10rem] leading-[4rem] text-pink-800 text-center">
        {{ totalSeconds | convertSecondsToString }}
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerDisplayComponent {
  @Input()
  totalSeconds: number
}
