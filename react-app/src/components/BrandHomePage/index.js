import React from 'react'
import BrandNavBar from '../BrandComponents/BrandNavBar/BrandNavBar'
import { BrandFooter } from '../BrandComponents/BrandFooter/BrandFooter'
import { BrandHeader } from '../BrandComponents/BrandHeader/BrandHeader'
import { BrandGallery } from '../BrandComponents/BrandGallery/BrandGallery'
import { BrandFeatured } from '../BrandComponents/BrandFeatured/BrandFeatured'
import { BrandAbout } from '../BrandComponents/BrandAbout/BrandAbout'
import { BrandInfiniteScroll } from '../BrandComponents/BrandInfiniteScroll/BrandInfiniteScroll'
import { BrandProducts } from '../BrandComponents/BrandProducts/BrandProducts'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getSingleBrandThunk } from '../../store/brands'
import { getSingleProductThunk } from '../../store/products'
import { useEffect, useState } from 'react'
import LoadingButton from '../LoadingButton'





export const BrandHomePage = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true);

  const { brandName } = useParams()
  console.log("BRAND NAME FOR HOME PAGE", brandName)

  const state = useSelector((state) => state)
  console.log("STATE", state)
  const currentBrand = state.brands.singleBrand
  console.log("CURRENT BRAND", currentBrand)
  console.log("CURRENT BRAND STORY", currentBrand.story)


  useEffect(() => {
    // dispatch(getSingleProductThunk(productId))
    dispatch(getSingleBrandThunk(brandName))
  }, [dispatch, brandName])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);

    }, 2000);

    return () => clearTimeout(timeout);
  }, [brandName]);

  if (isLoading && currentBrand) {
    return <LoadingButton />
  }

  // if (!currentBrand) {
  //   return <h1>loading...</h1>
  // }


  return (
    <>
      {currentBrand ? (
        <div className='brand-page-main-container' id='brand-page-main-container'>
          <BrandNavBar brandName={brandName} currentBrand={currentBrand} />
          <BrandHeader brandName={brandName} currentBrand={currentBrand} />
          <BrandInfiniteScroll />

          <BrandProducts brandName={brandName} currentBrand={currentBrand} />
          <BrandAbout brandName={brandName} currentBrand={currentBrand} />


          {currentBrand.products.length >= 1 && (
            <BrandFeatured currentBrand={currentBrand} brandName={brandName} />
          )
          }


          <BrandGallery />
          <BrandFooter />
        </div>
      ) : null
      }
    </>

  )
}

export default BrandHomePage
