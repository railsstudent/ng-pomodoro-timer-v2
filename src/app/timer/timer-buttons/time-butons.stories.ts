import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TimerButtonsComponent } from './timer-buttons.component'
import { CommonModule } from '@angular/common'

import { action } from '@storybook/addon-actions'

export default {
  title: 'Timer Buttons',
  component: TimerButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FontAwesomeModule],
    }),
  ],
} as Meta

export const ActionsData = {
  statusChange: action('statusChange'),
  updateRemainingSeconds: action('updateRemainingSeconds'),
}

const Template: Story<TimerButtonsComponent> = (args: TimerButtonsComponent) => ({
  props: {
    ...args,
    statusChange: ActionsData.statusChange,
    updateRemainingSeconds: ActionsData.updateRemainingSeconds,
  },
})

export const TwoMinutesTimer = Template.bind({})
TwoMinutesTimer.args = {
  countDownSeconds: 120,
  debugMode: true,
}

export const TwentySecondsTimer = Template.bind({})
TwentySecondsTimer.args = {
  countDownSeconds: 20,
  debugMode: true,
}
