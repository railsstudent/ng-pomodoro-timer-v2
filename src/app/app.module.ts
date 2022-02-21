import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TimerModule } from './timer'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FontAwesomeModule, TimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
