import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_characters } from '../../actions/charactersActions';
import useInView from 'react-cool-inview';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Fatal from '../../components/Fatal';

const Layout = ({ children }) => {
	const characters = useSelector((state) => state.charactersReducer);
	const dispatch = useDispatch();

	const { isLoading, error, results } = characters;

	const [colSize, setColSize] = useState('col-12 col-lg-10');
	const [sticky, setSticky] = useState('');

	useEffect(() => {
		dispatch(get_characters());
	}, [dispatch]);

	const updateChildrenWithProps = React.Children.map(children, (child, i) => {
		return (
			characters &&
			React.cloneElement(child, {
				characters,
				index: i,
			})
		);
	});

	const { ref } = useInView({
		onChange: ({ inView }) => {
			if (!inView) {
				setColSize('col-4 col-lg-3');
				setSticky('sticky-top');
			} else {
				setColSize('col-12 col-lg-10');
				setSticky('');
			}
		},
	});

	return (
		<div className="container-fluid">
			<Header col_size={colSize} sticky={sticky} />
			<div className="row justify-content-end m-0 p-0">
				<div className="observer col-1" ref={ref} />
			</div>
			{isLoading ? (
				<Loader vh="vh85" size="10x" />
			) : error ? (
				<Fatal error={characters.error} />
			) : (
				results && updateChildrenWithProps
			)}
			<Footer />
		</div>
	);
};

export default Layout;
