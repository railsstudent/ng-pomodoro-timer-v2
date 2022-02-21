import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellModule } from './timer-shell'
import { TimerDisplayModule } from './timer-display'

@NgModule({
  declarations: [],
  imports: [CommonModule, TimerDisplayModule, TimerShellModule],
  exports: [TimerShellModule],
})
export class TimerModule {}
