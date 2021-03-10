import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_characters } from '../../actions/charactersActions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Fatal from '../../components/Fatal';

const Layout = ({ children }) => {
	const characters = useSelector((state) => state.charactersReducer);
	const dispatch = useDispatch();

	const { isLoading, error, results } = characters;

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

	return (
		<div className="container-fluid">
			<Header />
			{isLoading ? (
				<Loader vh="vh85" size="10x" />
			) : error ? (
				<Fatal error={characters.error} vh="vh85" />
			) : (
				results && updateChildrenWithProps
			)}
			<Footer />
		</div>
	);
};

export default Layout;
