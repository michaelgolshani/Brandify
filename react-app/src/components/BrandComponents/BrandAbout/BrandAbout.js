import React from 'react'
import './BrandAbout.css'

export const BrandAbout = ({ currentBrand, theme }) => {

  if (!currentBrand) {
    return null
  }


  return (
    <div className={`brand-about-section brand-section ${theme}`}>
      <h6 className='brand-section-header'>ABOUT</h6>
      <p id='brand-about-headline'>
        {currentBrand.story}
      </p>
    </div>
  )
}
