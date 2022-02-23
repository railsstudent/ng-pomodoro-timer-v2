import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TimerButtonsComponent } from './timer-buttons.component'

export default {
  title: 'Timer Buttons',
  component: TimerButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
} as Meta

const Template: Story<TimerButtonsComponent> = (args: TimerButtonsComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
