import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellComponent } from './timer-shell.component'
import { TimerDisplayModule } from '../timer-display'
import { TimerMessageModule } from '../timer-message'

@NgModule({
  declarations: [TimerShellComponent],
  imports: [CommonModule, TimerDisplayModule, TimerMessageModule],
  exports: [TimerShellComponent],
})
export class TimerShellModule {}
