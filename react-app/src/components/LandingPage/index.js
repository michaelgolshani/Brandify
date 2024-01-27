import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'
import headerImage from '../../assets/header.jpeg'
import { LandingPageInfiniteScroll } from './LandingPageInfiniteScroll'
import landingPageExample from '../../assets/website-example.jpg'
import { DescriptionCard } from './DescriptionCard'



const LandingPage = () => {



  return (
    <div className='landing-page-container'>
      <div className='landing-page-top-container' role="banner">
        <div className='landing-page-left-side'>
          <h1 className='landing-page-header' role="heading">The global commerce platform</h1>
          <h2>Build your business with Brandify to sell online, offline, and everywhere in between.</h2>
          <NavLink to="/signup">
            <button className='landing-page-signup' role='button' aria-label='Sign Up'>Sign Up</button>
          </NavLink>
        </div>
        <div className='landing-page-right-side' aria-aria-label='Infinite Scroll Feature Section'>
          <LandingPageInfiniteScroll />
        </div>
      </div>

      <section className='landing-page-middle-container'>
        <h2 className='landing-page-middle-container-text' role='heading' aria-level="2">Discover why millions of entrepreneurs choose Brandify to build their business — from hello world to IPO.</h2>
        <div className='landing-page-description-cards' aria-label='Description Cards'>
          <DescriptionCard color='white' cardTitle='high-res' />
          <DescriptionCard color='white' cardTitle='flexible' />
          <DescriptionCard color='white' cardTitle='versatile' />
        </div>
      </section>

      <div className='landing-page-your-store-container'>
        <h2 className='landing-page-your-store-text'>Your store, redefined</h2>
        <img className='landing-page-example' src={landingPageExample} alt="An example of what your store can look like" />
        <section className='landing-page-two-section' aria-labelledby="landing-page-section-title">

          <div className='landing-page-individual-sections'>
            <div className='landing-page-indivdual-section-top-border'></div>
            <h3 id="build-section-title" className='landing-page-indivdual-section-top-title'>Build an Online Storefront</h3>
            <p className='landing-page-indivdual-section-paragraph'>We make it easy for you to build a website from the ground up. Keep track of everything you need to create a successful brand. </p>
          </div>

          <div className='landing-page-individual-sections'>
            <div className='landing-page-indivdual-section-top-border'></div>
            <h3 id="craft-section-title" className='landing-page-indivdual-section-top-title'>Craft the brand you want</h3>
            <p className='landing-page-indivdual-section-paragraph'>Bring your vision to life with our premdade themes. The limit is your imagination. This can be your next big wave.</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default LandingPage
