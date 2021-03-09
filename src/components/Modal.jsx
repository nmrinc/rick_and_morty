import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          <FontAwesomeIcon icon={faCompress} />
        </button>

        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
