import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'Modal.Content',
  component: Modal.Content,
  decorators: [
    (Story) => (
      <Modal.Root open>
        <Modal.Backdrop />
        <Story />
      </Modal.Root>
    ),
  ],
} satisfies Meta<typeof Modal.Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <section>
        <h1>Some Modal Content</h1>
        <p>Looks nice!</p>
      </section>
    ),
  },
};
