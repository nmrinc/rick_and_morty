import React from 'react';
import Modal from './Modal';

const InfoModal = ({ isOpen, onClose, char }) => (
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
				<h5>
					Gender: <b>{char.gender}</b>
				</h5>
				<h5>
					Species: <b>{char.species}</b>
				</h5>
				<h5>
					Status: <b>{char.status}</b>
				</h5>
				<h5>
					Location: <b>{char.location.name}</b>
				</h5>
				<h5>
					Origin: <b>{char.origin.name}</b>
				</h5>
			</div>
		</div>
	</Modal>
);

export default InfoModal;
