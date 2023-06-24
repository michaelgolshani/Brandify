import React from 'react'
import BrandNavBar from '../BrandComponents/BrandNavBar/BrandNavBar'
import { BrandFooter } from '../BrandComponents/BrandFooter/BrandFooter'
import { BrandHeader } from '../BrandComponents/BrandHeader/BrandHeader'
import { BrandGallery } from '../BrandComponents/BrandGallery/BrandGallery'
import { BrandFeatured } from '../BrandComponents/BrandFeatured/BrandFeatured'
import { BrandAbout } from '../BrandComponents/BrandAbout/BrandAbout'





export const BrandHomePage = () => {

  return (

    <div className='brand-page-main-container' id='brand-page-main-container'>
      <BrandNavBar />
      <BrandHeader />
      <BrandFeatured />
      <BrandAbout />
      <BrandGallery />
      <BrandFooter />
    </div>
  )
}

export default BrandHomePage
