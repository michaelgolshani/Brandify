import React from 'react'
import './BrandAbout.css'

export const BrandAbout = ({currentBrand}) => {

  if(!currentBrand){
    return null
  }
  
  console.log("CURRENT STORY IN BRAND ABOUT", currentBrand)
  return (
    <div className='brand-about-section brand-section'>
      <h6 className='brand-section-header'>ABOUT</h6>
      <p id='brand-about-headline'>
       {currentBrand.story}
      </p>
    </div>
  )
}
