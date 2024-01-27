import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/Shopify-Logo.png'



function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch()
	const { brandName } = useParams()


	useEffect(() => {

	}, [dispatch, brandName])

	return (
		<nav className='full-nav-container'>
			<ul className='nav-container'>
				<li className='nav-item nav-item-left nav-logo'>
					{brandName && sessionUser ? (
						<NavLink exact to={`/store-dashboard/${brandName}`} className="nav-link" aria-label="Home">
							<img src={logo} className="logo-image" alt="Brandify Logo" />
							<div className='nav-logo-text'>brandify</div>
						</NavLink>
					) : (
						<>
							<NavLink exact to="/" className="nav-link" aria-label="Home">
								<img src={logo} className="logo-image" alt="Brandify Logo" />
								<div className='nav-logo-text'>brandify</div>
							</NavLink>

						</>
					)}
				</li>



				{isLoaded && sessionUser ? (
					<li className='nav-item nav-item-right'>
						<NavLink exact to="/explore/brands" className="nav-link" aria-label="Explore Brands">
							<div className='nav-logo-explore'>Explore Brands</div>
						</NavLink>
						<ProfileButton user={sessionUser} />
					</li>
				) : (
					<div className='nav-login-signup-container'>
						<NavLink exact to="/explore/brands" className="nav-link" aria-label="Explore Brands">
							<div className='nav-logo-explore'>Explore Brands</div>
						</NavLink>
						<NavLink to="/login" className='nav-login' aria-label="Log In">
							<div>Log in</div>
						</NavLink>
						<NavLink to="/signup" className='nav-signup' aria-label="Sign Up">
							<div>Sign up</div>
						</NavLink>
					</div>
				)}
			</ul>
		</nav>
	);
}

export default Navigation;
