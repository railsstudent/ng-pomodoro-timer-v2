import { TimerDisplayComponent } from './timer-display.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [TimerDisplayComponent],
  imports: [CommonModule],
  exports: [TimerDisplayComponent],
})
export class TimerDisplayModule {}
