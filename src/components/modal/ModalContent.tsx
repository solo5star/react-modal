import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import type { StyledProps } from '../../types/StyledProps';

type ModalContentPlacement = 'top' | 'bottom' | 'left' | 'right' | 'center';

type ContentProps = {
  $placement: ModalContentPlacement;
};

const getAlignSelf = (placement: ModalContentPlacement) => {
  if (placement === 'top') return 'flex-start';
  if (placement === 'bottom') return 'flex-end';
  return 'center';
};

const getJustifySelf = (placement: ModalContentPlacement) => {
  if (placement === 'left') return 'flex-start';
  if (placement === 'right') return 'flex-end';
  return 'center';
};

const Content = styled.article<ContentProps>`
  align-self: ${(props) => getAlignSelf(props.$placement)};
  justify-self: ${(props) => getJustifySelf(props.$placement)};

  padding: 16px;
  z-index: 1;
  background-color: white;
`;

type ModalContentProps = PropsWithChildren<
  StyledProps<{
    placement?: ModalContentPlacement;
  }>
>;

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { placement = 'center', className, children } = props;

  return (
    <Content $placement={placement} className={className}>
      {children}
    </Content>
  );
};
