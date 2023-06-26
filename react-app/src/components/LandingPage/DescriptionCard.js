import React from 'react'
import './DescriptionCard.css'

export const DescriptionCard = ({ title, cardTitle, color }) => {
  return (
    <div className={`description-card-container ${color}`}>

      <div className='description-card-title'>{cardTitle}</div>
      <i class="fa-solid fa-arrow-up description-arrow"></i>

    </div>
  )
}
