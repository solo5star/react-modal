import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useKeyEvent } from './useKeyEvent';

test.each(['down', 'up'] as const)(
  'key%p 이벤트 발생 시 handler가 호출되어야 한다.',
  (eventType) => {
    const handler = jest.fn();
    renderHook(() => useKeyEvent(eventType, handler));

    fireEvent.keyDown(document);
    fireEvent.keyUp(document);

    expect(handler).toBeCalled();
  },
);
