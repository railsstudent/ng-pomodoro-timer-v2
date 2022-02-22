import { TimerMessageComponent } from './timer-message.component'
import { Meta, Story } from '@storybook/angular'

export default {
  title: 'Timer Message',
  component: TimerMessageComponent,
} as Meta

const Template: Story<TimerMessageComponent> = (args: TimerMessageComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
