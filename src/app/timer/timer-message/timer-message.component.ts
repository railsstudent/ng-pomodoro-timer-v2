import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { STATUS } from '../enums'

@Component({
  selector: 'app-timer-message',
  template: `
    <div class="my-4 p-3">
      <p class="text-6xl text-pink-800 text-center">
        {{ message }}
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerMessageComponent implements OnChanges {
  @Input()
  status: string

  messageMap = {
    [STATUS.STOP]: 'Let the countdown begin!!',
    [STATUS.RUNNING]: 'Greatness is within sight!!',
    [STATUS.PAUSE]: 'Never quit keep going!!',
  }

  message = ''

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['status']?.currentValue
    if (currentValue) {
      const typedStatusString = currentValue as keyof typeof STATUS
      const typedStatus = STATUS[typedStatusString]
      this.message = this.messageMap[typedStatus]
    }
  }
}
