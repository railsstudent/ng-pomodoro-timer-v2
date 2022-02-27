import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerButtonsComponent } from './timer-buttons.component'

@NgModule({
  declarations: [TimerButtonsComponent],
  imports: [CommonModule],
  exports: [TimerButtonsComponent],
})
export class TimerButtonsModule {}
