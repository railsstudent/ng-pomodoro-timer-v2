import { Component } from '@angular/core'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400">
      <app-timer-display [totalSeconds]="totalSeconds"></app-timer-display>
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
})
export class TimerShellComponent {
  totalSeconds = 900
}
