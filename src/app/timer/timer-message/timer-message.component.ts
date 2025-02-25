import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { STATUS } from '../status.type'

@Component({
  selector: 'app-timer-message',
  template: `
    <div class="my-4 p-3">
      @if (status() === 'STOP') {
        <p class="text-7xl text-pink-800 text-center">Let the countdown begin!!</p>
      }
      @if (status() === 'RUNNING') {
        <p class="text-7xl text-pink-800 text-center">Greatness is within sight!!</p>
      }
      @if (status() === 'PAUSE') {
        <p class="text-7xl text-pink-800 text-center">Never quit keep going!!</p>
      }
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
  imports: [],
})
export class TimerMessageComponent {
  readonly status = input<STATUS>()
}
