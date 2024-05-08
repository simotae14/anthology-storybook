import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    disabled: { 
      control: 'boolean',
      description: 'Disables the button',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Desctructive: Story = {
  args: {
    variant: 'destructive',
  },
};
