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
		<ul className='nav-container'>
			<li className='nav-item nav-item-left nav-logo'>
				{brandName && sessionUser ? (
					<NavLink exact to={`/store-dashboard/${brandName}`} className="nav-link">
						<img src={logo} className="logo-image" />
						<div className='nav-logo-text'>brandify</div>
					</NavLink>
				) : (
					<>
						<NavLink exact to="/" className="nav-link">
							<img src={logo} className="logo-image" />
							<div className='nav-logo-text'>brandify</div>
						</NavLink>

					</>
				)}
			</li>



			{isLoaded && sessionUser ? (
				<li className='nav-item nav-item-right'>
					<NavLink exact to="/explore/brands" className="nav-link">

						<div className='nav-logo-explore'>Explore Brands</div>
					</NavLink>
					<ProfileButton user={sessionUser} />
				</li>
			) : (
				<div className='nav-login-signup-container'>
					<NavLink exact to="/explore/brands" className="nav-link">
						<div className='nav-logo-explore'>Explore Brands</div>
					</NavLink>
					<NavLink to="/login" className='nav-login'>
						<div >Log in</div>
					</NavLink>
					<NavLink to="/signup" className='nav-signup'>
						<div >Sign up</div>
					</NavLink>
				</div>
			)}
		</ul>
	);
}

export default Navigation;
