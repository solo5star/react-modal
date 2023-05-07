import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { useKeyEvent } from '../../hooks/useKeyEvent';
import type { StyledProps } from '../../types/StyledProps';

type RootProps = {
  $open?: boolean;
};

const Root = styled.div<RootProps>`
  display: ${(props) => (props.$open ? 'grid' : 'none')};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
  }
`;

type ModalRootProps = PropsWithChildren<
  StyledProps<{
    open?: boolean;
    onClose?: () => void;
  }>
>;

export const ModalRoot: React.FC<ModalRootProps> = (props) => {
  const { open, onClose, className, children } = props;

  useKeyEvent('down', (event) => {
    if (event.key === 'Escape') onClose?.();
  });

  return (
    <Root $open={open} className={className}>
      {children}
    </Root>
  );
};
