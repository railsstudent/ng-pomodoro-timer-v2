import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ConvertSecondsToStringPipe } from './convert-seconds-to-string.pipe';
import { TimerDisplayComponent } from './timer-display.component';

export default {
  title: 'Timer Display',
  component: TimerDisplayComponent,
  decorators: [
    moduleMetadata({
      declarations: [ConvertSecondsToStringPipe],
    }),
  ],
} as Meta;

const Template: Story<TimerDisplayComponent> = (args: TimerDisplayComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  totalSeconds: 900,
};

export const Zero = Template.bind({});
Zero.args = {
  totalSeconds: 0,
};

export const LessThanTenMinutes = Template.bind({});
LessThanTenMinutes.args = {
  totalSeconds: 9 * 60 + 25,
};

export const LessThanTenSeconds = Template.bind({});
LessThanTenSeconds.args = {
  totalSeconds: 8,
};
