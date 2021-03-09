import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

const Fatal = (props) => (
  <div className="row justify-content-center align-items-center vh85">
    <div className="col-6">
      <div className="card" style={{ width: '100%', backgroundColor: 'red', padding: '1em' }}>
        <FontAwesomeIcon icon={faSkullCrossbones} className="mx-auto" size="5x" />
        <div className="card-body text-center p-0 mt-1">
          <h1 className="card-title p-0 m-0">There was an error:</h1>
          <h2 className="card-body p-0">{props.error}</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Fatal;