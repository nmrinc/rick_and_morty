import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	get_more_characters,
	kill_character,
} from '../../actions/charactersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrashAlt,
	faPencilAlt,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import useInView from 'react-cool-inview';
import Loader from '../../components/Loader';
import InfoModal from '../../components/InfoModal';
import KillModal from '../../components/KillModal';

const Home = () => {
	const characters = useSelector((state) => state.charactersReducer);
	const dispatch = useDispatch();
	const { info, results } = characters;
	const [infoOpen, setInfoOpen] = useState(false);
	const [killOpen, setKillOpen] = useState(false);
	const [curChar, setCurChar] = useState({});

	const { ref } = useInView({
		rootMargin: '50px 0px',
		delay: 200,
		onEnter: ({ unobserve }) => {
			unobserve();
			if (results.length <= info.count) {
				dispatch(get_more_characters());
			}
		},
	});

	const createCards = () => {
		const cards = (
			<div className="row justify-content-start align-items-center my-5">
				{results.map((col) => (
					<div className="col-4 col-md-3 rounded my-3" key={col.id}>
						<div
							className="card"
							style={{ backgroundColor: 'rgb(32, 35, 41)', color: 'white' }}
						>
							<img
								className="img-fluid card-img-top"
								src={col.image}
								alt={col.name}
							/>
							<div className="card-body">
								<p>{col.name}</p>
								<div className="btn-group" role="group">
									<button
										type="button"
										className="btn btn-success"
										onClick={() => handleOpenInfo(col.id)}
									>
										<FontAwesomeIcon icon={faEye} />
									</button>
									<Link to={`/edit/${col.id}`}>
										<button type="button" className="btn btn-success">
											<FontAwesomeIcon icon={faPencilAlt} />
										</button>
									</Link>
									<button
										type="button"
										className="btn btn-success"
										onClick={() => handleOpenKill(col.id)}
									>
										<FontAwesomeIcon icon={faTrashAlt} />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);

		return cards;
	};

	const handleOpenInfo = (id) => {
		const char = results.find((item) => item.id === id);
		setCurChar(char);
		console.log(curChar);
		setInfoOpen(true);
	};

	const handleOpenKill = (id) => {
		const char = results.find((item) => item.id === id);
		setCurChar(char);
		setKillOpen(true);
	};

	const handleCloseModal = () => {
		setInfoOpen(false);
		setKillOpen(false);
	};

	const handleKillSwitch = (id) => {
		dispatch(kill_character(id));
	};

	return (
		<>
			<div
				className="row justify-content-center align-items-center mt-3"
				style={{ minHeight: '3em' }}
			>
				<div
					className="col text-center py-1"
					style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.8)' }}
				>
					<h4 className="p-0 m-0">
						To this date, there are{' '}
						<strong style={{ color: 'rgb(199,220,93)' }}>{info.count}</strong>{' '}
						characters in all universes.
					</h4>
				</div>
				<div className="w-100"></div>
				<div className="col text-center py-1">
					<Link to={`/create`}>
						<button className="btn btn-info">Add character</button>
					</Link>
				</div>
			</div>
			{createCards()}
			<div className="mb-5" ref={ref}>
				<Loader size="lg" />
			</div>
			{Object.keys(curChar).length && (
				<InfoModal
					isOpen={infoOpen}
					onClose={handleCloseModal}
					char={curChar}
				/>
			)}
			<KillModal
				isOpen={killOpen}
				onClose={handleCloseModal}
				char={curChar}
				killSwitch={handleKillSwitch}
			/>
		</>
	);
};

export default Home;
