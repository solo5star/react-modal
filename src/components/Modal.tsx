import React, { PropsWithChildren } from 'react';

type ModalProps = {
  open?: boolean;
};

export const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
  const { open, children } = props;

  return (
    <div
      style={{
        display: open ? '' : 'none',
      }}
    >
      {children}
    </div>
  );
};
