import React from 'react'
import { useEffect } from 'react'
// import './ShoppingCart.css'
import { useState } from 'react'
import { useRef } from 'react'
import './MainShoppingCart.css'
import './ModernShoppingCart.css'
import './PoppyShoppingCart.css'

const ShoppingCart = ({ openCart, currentProductQuantity, setCurrentProductQuantity, setOpenCart, cartItems, setCartItems, brandName,theme }) => {
  // const [order, setOrder] = useState(1)
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);


  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpenCart(false);
      }
    };

    if (openCart) {
      document.addEventListener('mousedown', handleClickOutsideCart);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCart);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openCart, setOpenCart]);


  // if a user is in the shopping cart, we won't allow them to scroll
  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openCart]);


  // this will remove an item out of our shopping cart. But currently doesn't remove item from state
  const handleRemoveItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };



  // This will handle the quantity change for an item
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[index].quantity = newQuantity;
      setCartItems(updatedItems);
    } else {
      // Set the quantity to zero if it is negative
      const updatedItems = [...cartItems];
      updatedItems[index].quantity = 0;
      setCartItems(updatedItems);
    }
  };


  //Calculates Total for the shopping cart
  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  };



  // this will put a loading sign on the checkout button to wait a bit before showing the complete response
  const handleCheckout = () => {
    setShowLoading(true);
    setTimeout(() => {
      setCheckoutCompleted(true);
      setShowLoading(false);
      setCartItems([]);
    }, 2000);
  };


  // Once an order is closed, refesh the shopping cart and close the shopping cart pop up
  const handleOrderCompleteClose = () => {
    setOpenCart(!openCart)
    setCheckoutCompleted(false)
    setCartItems([])
  }

  return (
    <div className={`whole-page-cart ${theme}`}>


      {checkoutCompleted ? (
        <>
          <div class="page-overlay"></div>
          <div className={`shopping-cart-main-container${openCart ? ' open' : ''}`}>
            <div className='shopping-cart-width'>
              <div className='shopping-cart-your-cart'>
                <div >ORDER COMPLETE</div>
                <i className="fa-regular fa-x shopping-cart-x" onClick={() => handleOrderCompleteClose()}></i>
              </div>
              <h1>Thank you for shopping with {brandName}</h1>
              <p>Your order will be on its way!</p>
              <p>Please reach out if you have any questions or concerns.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {openCart ? (
            <div class="page-overlay"></div>
          ) : (
            <></>
          )


          }

          <div className={`shopping-cart-main-container${openCart ? ' open' : ''}`}>

            <div className='shopping-cart-width'>
              <div className='shopping-cart-your-cart'>
                <div >YOUR CART</div>
                <i className="fa-regular fa-x shopping-cart-x" onClick={() => setOpenCart(!openCart)}></i>
              </div>

              <div className='shopping-cart-product-container'>





                {cartItems.map((item, index) => (
                  <div className='shopping-cart-product' key={index}>
                    <img className='shopping-cart-prouct-image' src={item.image} alt={item.name} />
                    <div className='shopping-cart-product-right-side'>
                      <div className='shopping-cart-product-flavor-money'>
                        <div className='shopping-cart-product-flavor'>{item.name}</div>
                        <div className='shopping-cart-product-money'>{`$${(item.price * item.quantity).toFixed(2)}`}</div>
                      </div>
                      <div className='shopping-cart-add-minus'>
                        <i
                          className="fa-solid fa-minus shopping-cart-amount"
                          onClick={() => handleQuantityChange(index, item.quantity - 1)}
                        ></i>
                        <div className='shopping-cart-amount'>{item.quantity}</div>
                        <i
                          className="fa-regular fa-plus plus-sign"
                          onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        ></i>
                      </div>
                      <div
                        className='shopping-cart-remove'
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                ))}





              </div>

              {/* <div>Add a note to your order</div>
    <textarea className='shopping-cart-text-area'></textarea> */}

              <div className='shopping-cart-bottom-section'>
                <div className='shopping-cart-bottom-price-subtotal'>
                  <div className='shopping-cart-subtotal'>Subtotal</div>
                  <div className='shopping-cart-total-amount'>{`$${calculateTotal()}`}</div>
                </div>

                {showLoading ? (
                  <div className='shopping-cart-bottom-check-out'>Loading...</div>
                ) : (
                  <div className='shopping-cart-bottom-check-out' onClick={handleCheckout}>Check Out</div>
                )}
              </div>

            </div>

          </div>
        </>
      )}

    </div>
  )
}


export default ShoppingCart
