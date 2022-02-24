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
  resetTimer: action('resetTimer'),
  updateRemainingSeconds: action('updateRemainingSeconds'),
}

const Template: Story<TimerButtonsComponent> = (args: TimerButtonsComponent) => ({
  props: {
    ...args,
    statusChange: ActionsData.statusChange,
    resetTimer: ActionsData.resetTimer,
    updateRemainingSeconds: ActionsData.updateRemainingSeconds,
  },
})

export const Primary = Template.bind({})
Primary.args = {
  countDownSeconds: 20,
}
