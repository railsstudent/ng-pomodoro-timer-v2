import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerShellComponent } from './timer-shell.component'

@NgModule({
  declarations: [TimerShellComponent],
  imports: [CommonModule],
  exports: [TimerShellComponent],
})
export class TimerShellModule {}
