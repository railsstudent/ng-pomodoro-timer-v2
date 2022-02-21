import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConvertSecondsToStringPipe } from './convert-seconds-to-string.pipe'
import { TimerDisplayComponent } from './timer-display.component'

@NgModule({
  declarations: [TimerDisplayComponent, ConvertSecondsToStringPipe],
  imports: [CommonModule],
  exports: [TimerDisplayComponent],
})
export class TimerDisplayModule {}
