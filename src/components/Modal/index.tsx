import React from 'react';
import IconMenu from '../Icons';
import './modal.scss';

interface IProps {
  open: boolean;
  setOpen: Function;
  title: string;
  className?: string;
  children: any;
}

const Modal = (props: IProps) => {
  const Close = () => {
    props?.setOpen(false);
  };

  return (
    <>
      {props?.open && (
        <div className="modal">
          <div className="overly" onClick={Close} />
          <div className="modal-container">
            <div className={'modal-main ' + props?.className}>
              <div className="modal-header">
                <h2>{props.title}</h2>
                <button onClick={Close}>
                  <IconMenu icon="Close" className="text-white" />
                </button>
              </div>
              <div className="modal-body">{props?.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
