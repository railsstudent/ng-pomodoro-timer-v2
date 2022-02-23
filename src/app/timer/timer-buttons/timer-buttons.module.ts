import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerButtonsComponent } from './timer-buttons.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [TimerButtonsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TimerButtonsComponent, FontAwesomeModule],
})
export class TimerButtonsModule {}
