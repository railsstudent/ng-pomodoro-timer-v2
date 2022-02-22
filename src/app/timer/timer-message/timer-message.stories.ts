import { TimerMessageComponent } from './timer-message.component'
import { Meta, Story } from '@storybook/angular'
import { STATUS } from '../enums'

export default {
  title: 'Timer Message',
  component: TimerMessageComponent,
} as Meta

const Template: Story<TimerMessageComponent> = (args: TimerMessageComponent) => ({
  props: args,
})

export const Stop = Template.bind({})
Stop.args = {
  status: STATUS.STOP.toString(),
}

export const Pause = Template.bind({})
Pause.args = {
  status: STATUS.PAUSE.toString(),
}

export const Running = Template.bind({})
Running.args = {
  status: STATUS.RUNNING.toString(),
}
