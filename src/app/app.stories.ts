import { AppComponent } from './app.component'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { AppModule } from './app.module'

export default {
  title: 'App Component',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [AppModule],
    }),
  ],
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
})

export const Primary = Template.bind({})
