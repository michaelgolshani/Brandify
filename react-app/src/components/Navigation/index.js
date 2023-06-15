import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/Shopify-Logo.png'

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul className='nav-container'>
			<li className='nav-item nav-item-left nav-logo'>
				<NavLink exact to="/"  className="nav-link">

					<img src = {logo} className="logo-image"/>
					</NavLink>
			</li>
			{isLoaded && (
				<li className='nav-item nav-item-right'>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
