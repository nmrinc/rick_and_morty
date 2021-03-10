import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { create_character } from '../../actions/charactersActions';
import Fatal from '../../components/Fatal';
import Loader from '../../components/Loader';
import { useEffect } from 'react';

const Create = () => {
	const characters = useSelector((state) => state.charactersReducer);
	const { isLoading, error, info } = characters;
	const dispatch = useDispatch();
	const [redirect, setRedirect] = useState(false);
	const [form, setForm] = useState({
		name: '',
		gender: '',
		species: '',
		status: '',
		location: '',
		origin: '',
		image: '',
		id: info.count + 1,
	});


	const handleUpdateChar = (e) => {
		const updated_char = { ...form, [e.target.name]: e.target.value };
		setForm(updated_char);
	};

	const updateChar = () => {
		dispatch(create_character(form));
		if (!error) { setRedirect(true); }
	};

	useEffect(() => {
		setRedirect(false);
	}, []);

	if (error) {
		return <Fatal error="Can't create" />;
	} else {
		return (
			<>
				{redirect && <Redirect to="/" />}
				<div
					className="row justify-content-center align-items-center mt-3 mb-5 py-2"
					style={{
						minHeight: '3em',
						color: 'white',
						backgroundColor: 'rgba(0,0,0,0.8)',
					}}
				>
					<div className="col-10 col-md-4 text-center py-1">
						<h1>Create character</h1>
					</div>
					<div className="w-100"></div>
					<div className="col-4 text-center py-1">
						<img src='https://rickandmortyapi.com/api/character/avatar/19.jpeg' alt='Unknown' className="img-fluid" />
					</div>
					<div className="w-100 d-md-none"></div>
					<div className="col-6 col-lg-4 mt-2 mt-md-0">
						Name:{' '}
						<input
							name="name"
							type="text"
							className="w-100"
							value={form.name}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Gender:{' '}
						<input
							name="gender"
							type="text"
							className="w-100"
							value={form.gender}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Species:{' '}
						<input
							name="species"
							type="text"
							className="w-100"
							value={form.species}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Status:{' '}
						<input
							name="status"
							type="text"
							className="w-100"
							value={form.status}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Location:{' '}
						<input
							name="location"
							type="text"
							className="w-100"
							value={form.location}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Origin:{' '}
						<input
							name="origin"
							type="text"
							className="w-100"
							value={form.origin}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						Image:{' '}
						<input
							name="image"
							type="text"
							className="w-100"
							value={form.image}
							onChange={handleUpdateChar}
						/>
						<br />
						<br />
						<button
							className="btn btn-success my-3 align-self-end"
							onClick={updateChar}
						>
							Create
						</button>
						{isLoading && <Loader size="lg" />}
					</div>
				</div>
			</>
		);
	}
};

export default Create;
