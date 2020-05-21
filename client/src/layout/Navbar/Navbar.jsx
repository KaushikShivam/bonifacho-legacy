import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import cart from '../../assets/cart.png';
import phoneIcon from '../../assets/phoneGreen.png';
import searchInput from '../../assets/searchInput.png';

import { logout } from './../../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const adminLink = () =>
		user &&
		user.role === 'artist' && (
			<Link to='/dashboard' className='signin'>
				DASHBOARD
			</Link>
		);

	const authLinks = () => (
		<div className='login'>
			{adminLink()}
			<span onClick={logout} className='signin'>
				LOG OUT
			</span>
		</div>
	);

	const guestLinks = () => (
		<div className='login'>
			<Link to='/login' className='signin'>
				SIGN IN
			</Link>
			<Link to='/signup' className='signin'>
				REGISTER
			</Link>
		</div>
	);

	return (
		<div className='Navbar'>
			<div className='Navbar-main'>
				{/* left */}
				<div className='Navbar-main-left'>
					<div className='search'>
						<img src={`${searchInput}`} alt='Search input' />
					</div>
					<div className='phone'>
						<div>
							<img src={`${phoneIcon}`} alt='phone icon' />
						</div>
						<p>+9711112922</p>
					</div>
				</div>
				<Link to='/' className='Navbar-main-center'>
					<Logo />
				</Link>
				{/* Right */}
				<div className='Navbar-main-right'>
					{!loading && (isAuthenticated ? authLinks() : guestLinks())}
					<div className='cart'>
						<img src={`${cart}`} alt='Cart' />
						<span>8</span>
					</div>
				</div>
			</div>
			<div className='Navbar-bottom'>
				<div className='categories'>
					<p className='browse'>BROWSE GALLERIES:</p>
					<Link to={{ pathname: '/artworks', state: { edition: 'Limited' } }}>
						LIMITED EDITIONS
					</Link>
					<Link to={{ pathname: '/artworks', state: { edition: 'Limited' } }}>
						ORIGINAL ARTWORKS
					</Link>
				</div>
				<div className='contact'>
					<div>ARTISTS</div>
					<div>CONTACT US</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
