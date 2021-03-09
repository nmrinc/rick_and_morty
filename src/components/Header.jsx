import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/svg/logo.svg';

const Header = (props) => {
	return (
		<div className={`row justify-content-center align-items-center header ${props.sticky}`}>
			<div className={`${props.col_size || 'col'}`}>
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
