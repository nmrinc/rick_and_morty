import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { update_character } from '../../actions/charactersActions';
import Fatal from '../../components/Fatal';
import Loader from '../../components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Edit = () => {
	const characters = useSelector((state) => state.charactersReducer);
	const dispatch = useDispatch();
	const { results, isLoading, redirect } = characters;
	const { charId } = useParams();
	const [char, setChar] = useState(
		results.find((item) => item.id === Number(charId))
	);

	const handleUpdateChar = (e) => {
		const updated_char = { ...char, [e.target.name]: e.target.value };
		setChar(updated_char);
	};

	const updateChar = () => {
		dispatch(update_character(char));
	};

	if (char === undefined) {
		return <Fatal error="Character not found" />;
	} else {
		return (
			<>
				{redirect && <Redirect to="/" />}
				<div
					className="row justify-content-center align-items-center mt-3 py-2"
					style={{
						minHeight: '3em',
						color: 'white',
						backgroundColor: 'rgba(0,0,0,0.8)',
					}}
				>
					<div className="col-4 text-center py-1">
						<h1>Update character</h1>
					</div>
					<div className="w-100"></div>
					<div className="col-4 text-center py-1">
						<button className="btn btn-success position-absolute m-1">
							<FontAwesomeIcon icon={faPencilAlt} size="lg" />
						</button>
						<img src={char.image} alt={char.name} className="img-fluid" />
					</div>
					<div className="w-100 d-md-none"></div>
					<div className="col-6 col-lg-4 mt-2 mt-md-0">
						Name:{' '}
						<input
							name="name"
							type="text"
							className="w-100"
							value={char.name}
							onChange={handleUpdateChar}
						/>
						<br />
						Gender:{' '}
						<input
							name="gender"
							type="text"
							className="w-100"
							value={char.gender}
							onChange={handleUpdateChar}
						/>
						<br />
						Status:{' '}
						<input
							name="status"
							type="text"
							className="w-100"
							value={char.status}
							onChange={handleUpdateChar}
						/>
						<br />
						Species:{' '}
						<input
							name="species"
							type="text"
							className="w-100"
							value={char.species}
							onChange={handleUpdateChar}
						/>
						<br />
						<button
							className="btn btn-success my-3 align-self-end"
							onClick={updateChar}
						>
							Update
						</button>
						{isLoading && <Loader size="lg" />}
					</div>
				</div>
			</>
		);
	}
};

export default Edit;
