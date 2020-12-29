import React, { Fragment } from 'react';
import Backdrop from './Backdrop';

type ModalProps = {
  showModal: boolean;
  children: any;
  closeModal: () => void;
};

const Modal = ({ closeModal, showModal, children }: ModalProps) => {
  return (
    <>
      <Backdrop
        show={showModal}
        clicked={() => {
          closeModal();
        }}
      />
      <div
        className="modal"
        style={{
          opacity: showModal ? '1' : '0',
          transform: showModal ? 'translateY(10vh)' : 'translateY(-50vh)',
        }}
      >
        <div className="modal__children">{children}</div>
      </div>
    </>
  );
};

export default Modal;
