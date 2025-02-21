import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerMessageComponent } from './timer-message.component'

@NgModule({
  declarations: [TimerMessageComponent],
  imports: [CommonModule],
  exports: [TimerMessageComponent],
})
export class TimerMessageModule {}
