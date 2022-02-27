import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400 flex flex-col justify-center">
      <div>
        <app-timer-message class="mb-6" [status]="status"></app-timer-message>
        <app-timer-display class="mb-8" [totalSeconds]="displaySeconds"></app-timer-display>
        <app-timer-buttons
          [countDownSeconds]="totalSeconds"
          (statusChange)="statusChange($event)"
          (updateRemainingSeconds)="updateRemainingSeconds($event)"
        ></app-timer-buttons>
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
export class TimerShellComponent implements OnInit {
  @Input()
  totalSeconds = 900

  status = 'STOP'

  displaySeconds: number

  ngOnInit(): void {
    this.displaySeconds = this.totalSeconds
  }

  statusChange(otherStatus: string) {
    this.status = otherStatus
  }

  updateRemainingSeconds(secondsRemained: number) {
    this.displaySeconds = secondsRemained
  }
}
