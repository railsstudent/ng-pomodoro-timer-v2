import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-timer-message',
  templateUrl: './timer-message.component.html',
  styleUrls: ['./timer-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerMessageComponent {
  @Input()
  status: string
}
