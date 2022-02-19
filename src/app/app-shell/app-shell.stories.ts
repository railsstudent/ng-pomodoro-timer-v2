import { HttpClientModule } from '@angular/common/http'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { AppShellComponent } from './app-shell.component'

export default {
  title: 'App Shell',
  component: AppShellComponent,
} as Meta

const Template: Story<AppShellComponent> = (args: AppShellComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
