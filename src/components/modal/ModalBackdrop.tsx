import type React from 'react';
import { styled } from 'styled-components';
import type { StyledProps } from '../../types/StyledProps';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;

type ModalBackdropProps = StyledProps<{
  onClick?: () => void;
}>;

export const ModalBackdrop: React.FC<ModalBackdropProps> = (props) => {
  const { onClick, className } = props;

  return <Backdrop onClick={onClick} className={className} />;
};
