import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellModule } from './timer-shell'
import { TimerDisplayModule } from './timer-display'
import { TimerMessageModule } from './timer-message'

@NgModule({
  declarations: [],
  imports: [CommonModule, TimerDisplayModule, TimerShellModule, TimerMessageModule],
  exports: [TimerShellModule],
})
export class TimerModule {}
