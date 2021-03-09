import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = (props) => (
  <div className={`row justify-content-center align-items-center my-auto ${props.vh || ''}`}>
    <div className="col-6 text-center">
      <FontAwesomeIcon icon={faSpinner} className="mx-auto" spin size={props.size || 'lg'} style={{ color: 'rgba(25,175,200,0.8)' }} />
    </div>
  </div>

);

export default Loader;