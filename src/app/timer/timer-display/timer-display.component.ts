import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ConvertSecondsToStringPipe } from './convert-seconds-to-string.pipe'

@Component({
  selector: 'app-timer-display',
  template: `
    <div class="p-4">
      <p class="text-[10rem] leading-[4rem] text-pink-800 text-center">
        {{ totalSeconds() | convertSecondsToString }}
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
  imports: [ConvertSecondsToStringPipe],
})
export class TimerDisplayComponent {
  readonly totalSeconds = input.required<number>()
}
