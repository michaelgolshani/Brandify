import React from 'react'
import { useParams, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'
import './BrandDashboard.css'
import { useHistory } from 'react-router-dom'
import SideBarDashboard from '../SideBarDashboard.js'
import './BrandDashboard.css'
import brandDetails from '../../assets/brand-details.jpg'


const BrandDashboardPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const { brandName } = useParams()


  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
  }, [brandName])


  return (
    <div className='dashboard-container'>
      <SideBarDashboard />
      <div className='main-container'>
        <div className='main-dashboard-brand-name'>{brandName}'s Dashboard</div>
        {/* <div className="grid-container"> */}
        <div className="grid-row">
          <div className="grid-cell" onClick={() => history.push(`/store-dashboard/${brandName}/edit`)}>
            <div className='inside-text'>Edit Brand Details</div>
          </div>
          <div className="grid-cell" onClick={() => history.push(`/${brandName}/products`)}>
            {/* <img src={brandDetails}></img> */}
            <div className='inside-text'>My Products</div>
          </div>
          <div className="grid-cell" onClick={() => history.push(`/store/${brandName}`)}>
            <div className='inside-text'>My Store</div>
          </div>
        </div>


        {/* </div> */}
      </div>
    </div>
  )
}



export default BrandDashboardPage
