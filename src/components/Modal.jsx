import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container rounded">
        <button onClick={props.onClose} className="Modal__close-button btn btn-success">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
