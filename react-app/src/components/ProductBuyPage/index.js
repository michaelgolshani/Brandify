import React, { useState } from 'react'
import { OrangeGradientWave, StraightGradientWave } from '../AllDesignContent/OrangeGradientWave'
import energyDrink from '../../assets/energy-drink-front-cover.jpg'
import energyDrinkColor from '../../assets/energy-drink-standing-tall-color.jpeg'
import './ProductBuyPage.css'








export const ProductBuyPage = () => {
  const [order, setOrder] = useState(1)

  return (

    <div className='product-page-container'>
      {/* <div className='top-bar-product-page'>ENERYETI</div> */}
      <section className='red anim_gradient top-section'>
        <div className="wave-top-test">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className='top-section-left index'>
          <div>
            <img src={energyDrinkColor} className='energy-drink index' />
          </div>
          <div className='small-images-product'>
          <img src={energyDrinkColor} className='energy-drink-small-images index' />
          <img src={energyDrinkColor} className='energy-drink-small-images index' />
          <img src={energyDrinkColor} className='energy-drink-small-images index' />
          <img src={energyDrinkColor} className='energy-drink-small-images index' />
          <img src={energyDrinkColor} className='energy-drink-small-images index' />
          </div>
        </div>
        <div className='top-section-right'>
          <div className='top-title-money'>
            <h1 className='index product-title shadowed-text'>CHEESE CAKE</h1>
            <div className='add-minus-sign-price'>$24</div>
          </div>
          <div className='add-minus-sign-container'>
            <div className='add-minus-sign' onClick={() => {
              if (order > 1) {
                setOrder(order - 1);
              }
            }}>
              <i className="fa-solid fa-minus" ></i>
            </div >
            <div className='add-minus-sign-number' >
              {order}
            </div>
            <div className='add-minus-sign' onClick={() => setOrder(order + 1)}>
              <i className="fa-regular fa-plus"></i>
            </div>
          </div>
          <div className='buy-now-button'>
            Add to Cart
          </div>

          <p className='index product-description'>Indulge in the electrifying fusion of energy and dessert with our Cheese Cake flavored energy drink. Experience the tantalizing blend of creamy richness and invigorating power in every sip. Unleash your taste buds and fuel your day with this irresistible energy boost!</p>
        </div>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section>
        <div class="wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>

        <h1 className='index'>Nice Curves 2</h1>
        <p className='index'>This is a test to see how we can do the product</p>
      </section>
      <section className='section-3'>
        <h1>Nice Curves 45</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section>
        <div class="wave-3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section class="wave-4">
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>

    </div>
  )
}
