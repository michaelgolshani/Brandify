import React, { useEffect } from 'react'
import './BrandNavBar.css'
import ProfileButton from '../../Navigation/ProfileButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector } from 'react-redux'
import { BrandProfileButton } from './BrandProfileButton'



export const BrandNavBar = ({ brandName, currentBrand, cartItems, openCart, setOpenCart, theme, sessionUser, isLoaded }) => {

  const history = useHistory()




  // let quantity=0
  // if (cartItems?.length > 1){
  //   for(let i = 0; i < cartItems.length ; i++){
  //     quantity += cartItems[i].quantity
  //   }
  // }
  // useEffect(() => {

  // },[cartItems])



  return (

    <div className={`${theme}`}>
      <div className={`brand-navbar`}>

        <div className='brand-navbar-brand-name' onClick={() => history.push(`/store/${brandName}`)}>
          {brandName}
        </div>

        {/* <div className='brand-navbar-all-products'>
          All Products
        </div> */}


        <div className='brand-navbar-right-side'>

          <BrandProfileButton />

        </div>



      </div>
    </div>
  )
}


export default BrandNavBar
