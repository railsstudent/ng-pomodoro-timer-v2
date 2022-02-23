import { Component, ChangeDetectionStrategy } from '@angular/core'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-timer-buttons',
  template: `
    <div class="flex p-4">
      <span class="spacer"></span>
      <div class="spacer flex justify-evenly">
        <button class="start button" aria-label="start timer">
          <fa-icon [icon]="faPlay"></fa-icon>
        </button>
        <button class="pause button" aria-label="pause timer">
          <fa-icon [icon]="faPause"></fa-icon>
        </button>
        <button class="stop button" aria-label="stop timer">
          <fa-icon [icon]="faStop"></fa-icon>
        </button>
      </div>
      <span class="spacer"></span>
    </div>
  `,
  styleUrls: ['./timer-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerButtonsComponent {
  faPlay = faPlay
  faStop = faStop
  faPause = faPause
}
