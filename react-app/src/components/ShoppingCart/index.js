import React from 'react'
import './ShoppingCart.css'
import { useState } from 'react'

const ShoppingCart = ({ openCart }) => {
  const [order, setOrder] = useState(1)



  return (
    <div className={`shopping-cart-main-container${openCart ? ' open' : ''}`}>
      <div class="page-overlay"></div>
      <div className='shopping-cart-width'>
        <div className='shopping-cart-your-cart'>
          <div >YOUR CART</div>
          <i className="fa-regular fa-x shopping-cart-x"></i>
        </div>

        <div className='shopping-cart-product-container'>
          <div className='shopping-cart-product'>
            <img className='shopping-cart-prouct-image' src="https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg?v=1650339716&width=2000"></img>

            <div className='shopping-cart-product-right-side'>
              <div className='shopping-cart-product-flavor-money'>
                <div className='shopping-cart-product-flavor'>Passionfruit</div>
                <div className='shopping-cart-product-money'>$24</div>
              </div>
              <div className='shopping-cart-add-minus'>
                <i className="fa-solid fa-minus shopping-cart-amount" onClick={() => {
                  if (order > 1) {
                    setOrder(order - 1);
                  }
                }}></i>

                <div className='shopping-cart-amount'>{order}</div>

                <i className="fa-regular fa-plus plus-sign" onClick={() => setOrder(order + 1)}></i>

              </div>

              <div className='shopping-cart-remove'>Remove</div>

            </div>

          </div>
          <div className='shopping-cart-product'>
            <img className='shopping-cart-prouct-image' src="https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg?v=1650339716&width=2000"></img>

            <div className='shopping-cart-product-right-side'>
              <div className='shopping-cart-product-flavor-money'>
                <div className='shopping-cart-product-flavor'>Passionfruit</div>
                <div className='shopping-cart-product-money'>$24</div>
              </div>
              <div className='shopping-cart-add-minus'>
                <i className="fa-solid fa-minus shopping-cart-amount" onClick={() => {
                  if (order > 1) {
                    setOrder(order - 1);
                  }
                }}></i>

                <div className='shopping-cart-amount'>{order}</div>

                <i className="fa-regular fa-plus plus-sign" onClick={() => setOrder(order + 1)}></i>

              </div>

              <div className='shopping-cart-remove'>Remove</div>

            </div>

          </div>
          <div className='shopping-cart-product'>
            <img className='shopping-cart-prouct-image' src="https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg?v=1650339716&width=2000"></img>

            <div className='shopping-cart-product-right-side'>
              <div className='shopping-cart-product-flavor-money'>
                <div className='shopping-cart-product-flavor'>Passionfruit</div>
                <div className='shopping-cart-product-money'>$24</div>
              </div>
              <div className='shopping-cart-add-minus'>
                <i className="fa-solid fa-minus shopping-cart-amount" onClick={() => {
                  if (order > 1) {
                    setOrder(order - 1);
                  }
                }}></i>

                <div className='shopping-cart-amount'>{order}</div>

                <i className="fa-regular fa-plus plus-sign" onClick={() => setOrder(order + 1)}></i>

              </div>

              <div className='shopping-cart-remove'>Remove</div>

            </div>

          </div>
        </div>

        {/* <div>Add a note to your order</div>
        <textarea className='shopping-cart-text-area'></textarea> */}

        <div className='shopping-cart-bottom-section'>
          <div className='shopping-cart-bottom-price-subtotal'>
            <div className='shopping-cart-subtotal'>Subtotal</div>
            <div className='shopping-cart-total-amount'>$24</div>
          </div>

          <div className='shopping-cart-bottom-check-out'>Check Out</div>
        </div>

      </div>

    </div>
  )
}


export default ShoppingCart
