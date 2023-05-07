import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

context('열린 상태일 때', () => {
  it('children을 표시해야 한다.', () => {
    render(
      <Modal.Root open>
        <div>CONTENT</div>
      </Modal.Root>,
    );

    expect(screen.getByText('CONTENT')).toBeVisible();
  });

  it('ESC를 누르면 onClose가 호출되어야 한다.', async () => {
    const onClose = jest.fn();
    render(
      <Modal.Root open onClose={onClose}>
        <div>CONTENT</div>
      </Modal.Root>,
    );

    await userEvent.keyboard('{Escape}');

    expect(onClose).toBeCalled();
  });
});
