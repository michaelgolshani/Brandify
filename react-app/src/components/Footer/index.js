import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-left' aria-label='Disclaimer: Brandify is a mock up store of Shopify'>
        <p>
          <strong>**Disclaimer:</strong> Brandify is a mock store replicating the aesthetic of Shopify.com
        </p>
        <div>Built by Michael Golshani</div>
      </div>


      <div className='footer-right' aria-label="Social Media Links">
        <a href='https://github.com/michaelgolshani' target="_blank" className='footer-links' rel='noopener noreferrer' aria-label='Github'>
          <div>Github</div>
        </a>

        <a href='https://www.linkedin.com/in/michaelgolshani/' target="_blank" className='footer-links' rel='noopener noreferrer' aria-label='LinkedIn'>
          <div>LinkedIn</div>
        </a>
      </div>

    </footer>
  )
}


export default Footer
