import { Component } from '@angular/core'
import { TimerShellComponent } from './timer/timer-shell/timer-shell.component'

@Component({
  selector: 'app-root',
  imports: [TimerShellComponent],
  template: '<app-timer-shell></app-timer-shell>',
})
export class AppComponent {
  title = 'ng-pomodoro-timer-v2.0'
}
