import React, { Fragment } from 'react';
import Backdrop from './Backdrop';

type ModalProps = {
  showModal: boolean;
  children: any;
  onCloseModal: () => void;
};

const Modal = ({ onCloseModal, showModal, children }: ModalProps) => {
  return (
    <>
      <Backdrop
        show={showModal}
        clicked={() => {
          onCloseModal();
        }}
      />
      <div className="modal" style={{ opacity: showModal ? '1' : '0' }}>
        {children}
      </div>
    </>
  );
};

export default Modal;
