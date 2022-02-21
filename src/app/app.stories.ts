import { AppComponent } from './app.component'
import { Meta, Story } from '@storybook/angular'

export default {
  title: 'App Component',
  component: AppComponent,
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
