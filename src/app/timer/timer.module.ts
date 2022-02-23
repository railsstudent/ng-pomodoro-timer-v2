import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellModule } from './timer-shell'

@NgModule({
  declarations: [],
  imports: [CommonModule, TimerShellModule],
  exports: [TimerShellModule],
})
export class TimerModule {}
