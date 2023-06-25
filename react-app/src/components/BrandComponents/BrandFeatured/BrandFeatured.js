import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import '../../ProductPage/ModernProductPage.css'
// import '../../ProductPage/PoppyProductPage.css'
import './BrandFeatured.css'

export const BrandFeatured = ({ currentBrand, brandName }) => {
  const history = useHistory()
  const currentBrandProducts = currentBrand.products


  return (
    <div className='brand-reviews-full-container'>
      <div className='brand-reviews-title'>
        <div>What People Are Saying</div>
      </div>

      <div className='brand-reviews-container'>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/fnVZvGh.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
            "This product had exceeded all my expectations and has made my life so much easier. The quality is top-notch, and the customer service is outstanding. Highly recommended for anyone looking for a reliable and innovative solution."
          </div>
          <div className='review-city-state'>Seattle, Washington</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/rtS2wWy.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
          "The attention to detail and craftsmanship are remarkable. The design is sleek and modern, adding a touch of elegance to my space. It's not just a product; it's a statement piece. Worth every penny!"
          </div>
          <div className='review-city-state'>Miami, Florida</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/eaOofmD.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
            "Outstanding product, highly recommended!!"
          </div>
          <div className='review-city-state'>Denver, Colorado</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/ZVVvEvH.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
          "The functionality and versatility are unparalleled. Whether I'm at home, in the office, or on the go, this product adapts seamlessly to my needs. The user interface is intuitive, and the performance is exceptional. I can't imagine my life without it now."
          </div>
          <div className='review-city-state'>New Orleans, Louisiana</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/XEJOAX0.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
          "I've tried many similar products in the past, but none come close to the quality and reliability of this one. The attention to detail in its design and construction is evident. It's not just a product; it's a testament to superior craftsmanship. I'm thoroughly impressed."
          </div>
          <div className='review-city-state'>San Francisco, California</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/4LT8i1d.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
            "Totally surprised. The packaging, customer service and the whole brand story they have here is amazing. Love this brand."
          </div>
          <div className='review-city-state'>Boston, Massachusetts</div>
        </div>


        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/Io4L2Tb.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
          "The level of innovation and thoughtfulness that went into its development is evident in every aspect. From the ergonomic design to the advanced features, it's clear that this product was created with the user in mind."
          </div>
          <div className='review-city-state'>Nashville, Tennessee</div>
        </div>

        <div className='individual-review-container'>
          <img className='review-carousel-image' src='https://i.imgur.com/RigxPsC.jpg' />
          <div className='review-stars-container'>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
            <i className="fa-sharp fa-solid fa-star review-stars"></i>
          </div>
          <div className='review-description'>
            "Outstanding product, highly recommended!!"
          </div>
          <div className='review-city-state'>Austin, Texas</div>
        </div>




      </div>
    </div>
  )
}
