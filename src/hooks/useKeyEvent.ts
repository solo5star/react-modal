import { useEffect } from 'react';

type KeyEventType = Extract<keyof DocumentEventMap, `key${string}`> extends `key${infer U}`
  ? U
  : never;

export const useKeyEvent = <K extends KeyEventType>(
  eventType: K,
  handler: (event: DocumentEventMap[`key${K}`]) => void,
) => {
  useEffect(() => {
    document.addEventListener(`key${eventType}`, handler);

    return () => document.removeEventListener(`key${eventType}`, handler);
  });
};
