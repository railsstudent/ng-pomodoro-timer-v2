import { Meta, Story } from '@storybook/angular'
import { TimerShellComponent } from './timer-shell.component'

export default {
  title: 'Timer Shell',
  component: TimerShellComponent,
} as Meta

const Template: Story<TimerShellComponent> = (args: TimerShellComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
