import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  template: `
    <div class="p-4">
      <p class="text-[10rem] leading-[4rem] text-pink-800 text-center">
        {{ timeString() }}
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
export class TimerDisplayComponent {
  readonly totalSeconds = input.required<number>();

  private getPrefix(value: number) {
    const ten = 10;
    return value < ten ? `0${value}` : `${value}`;
  }

  timeString = computed(() => {
    const secondsPerMinute = 60;
    const minutes = Math.floor(this.totalSeconds() / secondsPerMinute);
    const seconds = this.totalSeconds() - minutes * secondsPerMinute;
    const strMinutes = this.getPrefix(minutes);
    const strSeconds = this.getPrefix(seconds);
    return `${strMinutes}:${strSeconds}`;
  });
}
