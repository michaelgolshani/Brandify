import React from 'react'
import './AllBrands.css'
import { useState, useEffect } from 'react'
import { getAllBrandsThunk } from '../../store/brands'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const AllBrands = () => {

  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    dispatch(getAllBrandsThunk())
  }, [dispatch])

  const state = useSelector((state) => state)

  const brands = Object.values(state.brands?.allBrands)

    ("ALL BRANDS PAGE STATE", state)

    ("ALL BRANDS PAGE ARR", brands)


  return (
    <div className='all-brands-container'>
      <div className='all-brands-top-text-container'>
        <div className='all-brands-top-text'>All Brands</div>
      </div>


      <div className='all-brands-row-container'>
        {brands.map((brand, index) => (
          <div key={index} className='brand-item' onClick={() => history.push(`/store/${brand.name}/`)}>
            <img className='all-brands-images' src={brand.products[0]?.images[0]} />
            <div className='brand-image-overlay'>
              <div className='brand-inside-text'>
                <div className='brand-name'>{brand.name}</div>
                <div className='brand-slogan'>{brand.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}
