import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_more_characters } from '../../actions/charactersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrashAlt,
	faPencilAlt,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import useInView from 'react-cool-inview';
import Loader from '../../components/Loader';

const Home = () => {
	const characters = useSelector((state) => state.charactersReducer);
	const dispatch = useDispatch();
	const { info, results } = characters;

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
		const chars = [...results];
		const divided = [];

		for (let i = 0; i < chars.length; i += 5) {
			let chunk = chars.slice(i, i + 5);
			divided.push(chunk);
		}

		const cards = divided.map((row, i) => (
			<div
				className="row justify-content-center align-items-center my-5"
				key={i}
			>
				{row.map((col) => (
					<div className="col rounded" key={col.id}>
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
								<button>
									<FontAwesomeIcon icon={faEye} />
								</button>
								<button className="mx-lg-2">
									<FontAwesomeIcon icon={faPencilAlt} />
								</button>
								<button>
									<FontAwesomeIcon icon={faTrashAlt} />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		));

		return cards;
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
						characters in the universe.
					</h4>
				</div>
			</div>
			{createCards()}
			<div className="mb-5" ref={ref}>
				<Loader size="lg" />
			</div>
		</>
	);
};

export default Home;
