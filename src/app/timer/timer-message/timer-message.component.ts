import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-message',
  template: `
    <div class="my-4 p-3">
      <p class="text-7xl text-pink-800 text-center">{{ status | convertStatusToMessage }}</p>
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
  standalone: false,
})
export class TimerMessageComponent {
  @Input()
  status: string
}
