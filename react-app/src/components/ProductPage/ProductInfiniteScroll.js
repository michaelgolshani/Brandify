import React from 'react'
import './ProductInfiniteScroll.css'

export const ProductInfiniteScroll = ({ word, theme }) => {
  return (
    <div className={`product-scroll-container ${theme}`}>
      <div className='logos'>


        <div className='logos-slide'>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
        </div>


        <div className='logos-slide'>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
        </div>


        <div className='logos-slide'>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
          <div>{word}</div>
          <i class="fa-solid fa-arrow-up product-arrow"></i>
        </div>
      </div>
    </div>
  )
}
