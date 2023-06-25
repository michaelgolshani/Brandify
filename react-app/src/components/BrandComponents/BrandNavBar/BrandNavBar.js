import React, { useEffect } from 'react'
import './BrandNavBar.css'
import ProfileButton from '../../Navigation/ProfileButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector } from 'react-redux'



export const BrandNavBar = ({ brandName, currentBrand, cartItems, openCart,setOpenCart }) => {

  const history = useHistory()
  console.log("CART ITEMS", cartItems)

  // let quantity=0
  // if (cartItems?.length > 1){
  //   for(let i = 0; i < cartItems.length ; i++){
  //     quantity += cartItems[i].quantity
  //   }
  // }
  // useEffect(() => {

  // },[cartItems])

  return (


    <div className='brand-navbar'>

      <div className='brand-navbar-brand-name' onClick={() => history.push(`/store/${brandName}`)}>
        {brandName}
      </div>

      <div className='brand-navbar-all-products'>
        All Products
      </div>


      <div className='brand-navbar-right-side'>
        <div className='brand-navbar-cart-text' onClick={()=>  setOpenCart(!openCart)}>Cart </div>
        < ProfileButton />

      </div>



    </div>
  )
}


export default BrandNavBar
