import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertSecondsToString' })
export class ConvertSecondsToStringPipe implements PipeTransform {
  private getPrefix(value: number) {
    const ten = 10;
    return value < ten ? '0' : '';
  }

  transform(totalSeconds: number): string {
    const secondsPerMinute = 60;

    const minutes = Math.floor(totalSeconds / secondsPerMinute);
    const seconds = totalSeconds - minutes * secondsPerMinute;

    const strMinutes = `${this.getPrefix(minutes)}${minutes}`;
    const strSeconds = `${this.getPrefix(seconds)}${seconds}`;

    return `${strMinutes}:${strSeconds}`;
  }
}
