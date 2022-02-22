import { TimerModule } from './../timer.module'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { TimerShellComponent } from './timer-shell.component'

export default {
  title: 'Timer Shell',
  component: TimerShellComponent,
  decorators: [
    moduleMetadata({
      imports: [TimerModule],
    }),
  ],
} as Meta

const Template: Story<TimerShellComponent> = (args: TimerShellComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
