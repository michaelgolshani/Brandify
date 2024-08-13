import React from 'react';
import './LandingPageInfiniteScroll.css';

export const LandingPageInfiniteScroll = () => {
  const scrollItems = [
    "Cutting-Edge Design",
    "Timeless",
    "Industry Leader",
    "Highly Recommended",
    "Trusted by Experts"
  ];

  return (
    <div className="landing-page-scroll-container">
      <div className='landing-page-logos'>
        <div className='landing-page-logos-slide'>
          {scrollItems.concat(scrollItems).map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className='landing-page-logos-slide'>
          {scrollItems.concat(scrollItems).map((item, index) => (
            <div key={index + scrollItems.length}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
