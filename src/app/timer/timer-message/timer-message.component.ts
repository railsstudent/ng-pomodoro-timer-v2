import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { STATUS } from '../status.type';

@Component({
  selector: 'app-timer-message',
  template: `
    <div class="my-4 p-3">
      @let buttonClasses = 'text-7xl text-pink-800 text-center';
      @switch (status()) {
        @case ('STOP') {
          <p [class]="buttonClasses">Let the countdown begin!!</p>
        }
        @case ('RUNNING') {
          <p [class]="buttonClasses">Greatness is within sight!!</p>
        }
        @case ('PAUSE') {
          <p [class]="buttonClasses">Never quit keep going!!</p>
        }
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
})
export class TimerMessageComponent {
  readonly status = input<STATUS>();
}
