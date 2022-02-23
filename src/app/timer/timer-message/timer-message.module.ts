import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerMessageComponent } from './timer-message.component'
import { ConvertStatusToMessagePipe } from './convert-status-to-message.pipe'

@NgModule({
  declarations: [TimerMessageComponent, ConvertStatusToMessagePipe],
  imports: [CommonModule],
  exports: [TimerMessageComponent],
})
export class TimerMessageModule {}
