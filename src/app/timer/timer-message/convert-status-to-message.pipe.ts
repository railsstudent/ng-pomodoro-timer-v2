import { Pipe, PipeTransform } from '@angular/core'
import { STATUS } from '../enums'

@Pipe({
  name: 'convertStatusToMessage',
  standalone: false,
})
export class ConvertStatusToMessagePipe implements PipeTransform {
  transform(status: string): string {
    const messageMap = {
      [STATUS.STOP]: 'Let the countdown begin!!',
      [STATUS.RUNNING]: 'Greatness is within sight!!',
      [STATUS.PAUSE]: 'Never quit keep going!!',
    }

    const typedStatusString = status as keyof typeof STATUS
    const typedStatus = STATUS[typedStatusString]
    return messageMap[typedStatus] || ''
  }
}
