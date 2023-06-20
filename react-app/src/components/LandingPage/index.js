import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'
import headerImage from '../../assets/header.jpeg'



const LandingPage = () => {



  return (
    <div className='landing-page-container'>
      <div className='landing-page-top-container'>
        <div className='landing-page-left-side'>
          <div className='landing-page-header'>The Global commerce platform</div>
          <h2>Build your business with Brandify to sell online, offline, and everywhere in between.</h2>
          <NavLink to="/signup">
            <button className='landing-page-signup'>Sign Up</button>
          </NavLink>
        </div>
        <div className='landing-page-right-side'>
          <img src={headerImage} />
        </div>
      </div>

      <div className='landing-page-middle-container'>
        <h2 className='landing-page-middle-container-text'>Discover why millions of entrepreneurs chose Shopify to build their business — from hello world to IPO.</h2>
      </div>
    </div>
  )
}

export default LandingPage
