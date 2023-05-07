import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('ESC를 누르면 onClose가 호출되어야 한다.', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal.Root open onClose={onClose}>
        <div>CONTENT</div>
      </Modal.Root>,
    );

    fireEvent.keyDown(container);

    expect(onClose).toBeCalled();
  });
});
