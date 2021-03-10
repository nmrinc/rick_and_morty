import React from 'react';
import Modal from './Modal';

const KillModal = ({ isOpen, onClose, char, killSwitch }) => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<div className="row justify-content-center align-items-center">
			<div className="col-12 col-md-6">
				<img
					className="img-fluid Modal__image"
					src={char.image}
					alt={char.name}
				/>
			</div>
			<div className="col-12 col-md-6 pt-3 pt-md-4">
				<h3>
					<b>{char.name}</b>
				</h3>
				<h2>Are you sure?!</h2>
				<button type="button" className="btn btn-danger" onClick={() => { killSwitch(char.id); onClose(); }}>Kill it</button>
			</div>
		</div>
	</Modal>
);

export default KillModal;
