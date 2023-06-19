import React from 'react'
import { useParams, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'
import './BrandDashboard.css'
import { useHistory } from 'react-router-dom'
import SideBarDashboard from '../SideBarDashboard.js'


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
        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-cell" onClick={() => history.push(`/store-dashboard/${brandName}/edit`)}>Edit Brand Details</div>
            <div className="grid-cell" onClick={() => history.push(`/${brandName}/products`)}>My Products</div>
            <div className="grid-cell">Orders</div>
          </div>
          <div className="grid-row">
            <div className="grid-cell">Brand Details</div>
            <div className="grid-cell">My Products</div>
            <div className="grid-cell">Orders</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BrandDashboardPage
