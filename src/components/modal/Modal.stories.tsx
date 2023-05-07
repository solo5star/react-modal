import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Modal } from './Modal';

const meta = {
  title: 'Modal',
  component: Modal.Root,
} satisfies Meta<typeof Modal.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const Basic = {
  ...Modal,
  Content: styled(Modal.Content)`
    padding: 24px;
    background: white;
  `,
};

export const Default: Story = {
  args: {
    open: true,
  },
  render: ({ ...args }) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          열기
        </button>

        <Basic.Root {...args} open={open} onClose={() => setOpen(false)}>
          <Basic.Backdrop onClick={() => setOpen(false)} />
          <Basic.Content>
            <section>
              <h1>Hello! This is default modal.</h1>
              <p>
                You can open with <code>open</code> props.
              </p>
            </section>

            <button type="button" onClick={() => setOpen(false)}>
              닫기
            </button>
          </Basic.Content>
        </Basic.Root>
      </>
    );
  },
};

const StyledModal = {
  Root: Modal.Root,
  Backdrop: styled(Modal.Backdrop)`
    background-color: hsla(209, 100%, 30%, 0.3);
  `,
  Content: styled(Modal.Content)`
    padding: 24px;

    border: 2px solid hsl(209, 100%, 41%);
    border-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: hsl(209, 100%, 96%);
  `,
};

export const WithStyled: Story = {
  args: {
    open: true,
  },
  render: ({ ...args }) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          열기
        </button>

        <StyledModal.Root {...args} open={open} onClose={() => setOpen(false)}>
          <StyledModal.Backdrop onClick={() => setOpen(false)} />
          <StyledModal.Content placement="bottom">
            <section>
              <h1>Hello! This is default modal.</h1>
              <p>
                You can open with <code>open</code> props.
              </p>
            </section>

            <button type="button" onClick={() => setOpen(false)}>
              닫기
            </button>
          </StyledModal.Content>
        </StyledModal.Root>
      </>
    );
  },
};
