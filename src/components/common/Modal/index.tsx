import React, { MouseEvent } from 'react';
import { ModalWrapper, ModalOverlay, ModalContents } from '@/components/common/Modal/style';

interface IModalProps {
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

interface IModalComponentProps extends IModalProps {
  children: React.ReactNode;
}

const Modal = ({ onClick, children }: IModalComponentProps) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClick} />
      <ModalContents>{children}</ModalContents>
    </ModalWrapper>
  );
};

export default Modal;
