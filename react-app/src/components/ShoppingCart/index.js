import React from 'react'
import './ShoppingCart.css'

export const ShoppingCart = () => {
  return (
    <div className='shopping-cart-main-container'>

      <div className='shopping-cart-width'>
        <div className='shopping-cart-your-cart'>YOUR CART</div>

        <div className='shopping-cart-product'>
          <img className='shopping-cart-prouct-image' src="https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg?v=1650339716&width=2000"></img>

          <div className='shopping-cart-product-right-side'>
            <div className='shopping-cart-product-flavor-money'>
              <div className='shopping-cart-product-flavor'>Flavor</div>
              <div className='shopping-cart-product-money'>Price</div>
            </div>
            <div>Amount</div>
            <div>Remove</div>

          </div>
        </div>

        <div>Add a note to your order</div>
        <textarea className='shopping-cart-tezt-area'></textarea>

        <div>
          <div>Subtotal</div>
          <div>Total Price</div>
        </div>

        <div>Check Out</div>

      </div>

    </div>
  )
}


export default ShoppingCart
