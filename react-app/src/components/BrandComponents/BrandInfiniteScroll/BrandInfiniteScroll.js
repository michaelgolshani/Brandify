import React from 'react'
import './BrandInfiniteScroll.css'



export const BrandInfiniteScroll = ({theme}) => {
  return (
    <div className={`brand-scroll-container ${theme}`}>
      <div className='logos'>
        <div className='logos-slide'>
          <div>Cutting-Edge Design</div>
          <div>Timeless</div>
          <div>Industry Leader</div>
          <div>Highly Recommended</div>
          <div>Trusted by Experts</div>
        </div>
        <div className='logos-slide'>
          <div>Cutting-Edge Design</div>
          <div>Timeless</div>
          <div>Industry Leader</div>
          <div>Highly Recommended</div>
          <div>Trusted by Experts</div>
        </div>
      </div>
    </div>
  )
}
