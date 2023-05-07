import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'Modal.Backdrop',
  component: Modal.Backdrop,
  decorators: [
    (Story) => (
      <Modal.Root open>
        <Story />
      </Modal.Root>
    ),
  ],
} satisfies Meta<typeof Modal.Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
