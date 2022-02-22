import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellComponent } from './timer-shell.component'
import { TimerDisplayModule } from '../timer-display'

@NgModule({
  declarations: [TimerShellComponent],
  imports: [CommonModule, TimerDisplayModule],
  exports: [TimerShellComponent],
})
export class TimerShellModule {}
