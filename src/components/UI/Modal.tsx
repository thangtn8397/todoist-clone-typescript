import React, { Fragment } from 'react';
import Backdrop from './Backdrop';

type ModalProps = {
  showModal: boolean;
  children: any;
  modalType: string;
  onClickSuccessBtn: () => void;
  onClickCancelBtn: () => void;
};

const Modal = ({
  onClickSuccessBtn,
  onClickCancelBtn,
  showModal,
  children,
  modalType,
}: ModalProps) => {
  return (
    <>
      <Backdrop
        show={showModal}
        clicked={() => {
          onClickCancelBtn();
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
        <hr />
        <div className="modal__footer">
          <button
            className="btn modal__btn--success"
            type="button"
            onClick={() => {
              onClickSuccessBtn();
            }}
          >
            {modalType}
          </button>
          <button
            className="btn modal__btn--cancel"
            type="button"
            onClick={() => {
              onClickCancelBtn();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
