import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <div>**Disclaimer: Brandify is a mock store replicating the aesthetic of Shopify.com</div>
        <div>Built by Michael Golshani</div>
      </div>


      <div className='footer-right'>
        <a href='https://github.com/michaelgolshani'target="_blank"  className='footer-links'>
          <div>Github</div>
        </a>


        <a href='https://www.linkedin.com/in/michaelgolshani/' target="_blank" className='footer-links'>
          <div>LinkedIn</div>
        </a>

        {/* <a href='https://github.com/michaelgolshani' target="_blank" className='footer-links'>
          <div>Instagram</div>
        </a> */}


      </div>
    </div>
  )
}


export default Footer
