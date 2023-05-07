import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  context('닫혀있는 상태일 때', () => {
    it('children을 표시하지 않아야 한다.', () => {
      render(
        <Modal open={false}>
          <div>CONTENT</div>
        </Modal>,
      );

      expect(screen.getByText('CONTENT')).not.toBeVisible();
    });
  });

  context('열린 상태일 때', () => {
    it('children을 표시해야 한다.', () => {
      render(
        <Modal open>
          <div>CONTENT</div>
        </Modal>,
      );

      expect(screen.getByText('CONTENT')).toBeVisible();
    });
  });
});
