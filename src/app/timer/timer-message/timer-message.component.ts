import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-message',
  template: `
    <div class="my-4 p-3">
      <p class="text-7xl text-pink-800 text-center" *ngIf="status === 'STOP'">Let the countdown begin!!</p>
      <p class="text-7xl text-pink-800 text-center" *ngIf="status === 'RUNNING'">Greatness is within sight!!</p>
      <p class="text-7xl text-pink-800 text-center" *ngIf="status === 'PAUSE'">Never quit keep going!!</p>
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
export class TimerMessageComponent {
  @Input()
  status: string
}
