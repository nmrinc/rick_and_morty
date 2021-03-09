import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/svg/logo.svg';

const Header = () => {
	return (
		<div className="row header sticky-top">
			<div className="col-3">
				<Link to="/">
					<img
						className="img-fluid header_logo"
						src={logo}
						alt="Rick & Morty"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Header;
