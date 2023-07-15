import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NzButtonModule,],
    }),
  ]
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {},
};
