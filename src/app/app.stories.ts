import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import { TimerModule } from './timer';

export default {
  title: 'App Component',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [TimerModule],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
