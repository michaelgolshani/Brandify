import React from 'react'
import './BrandHeader.css'


export const BrandHeader = ({ brandName, currentBrand, theme }) => {
  ("BRAND NAME FOR HEADER", brandName)

  return (
    <div className={`brand-header-container brand-section ${theme}`}>

      <h1 id="brand-header-text">
        {currentBrand.description}
      </h1>
    </div>
  )
}
