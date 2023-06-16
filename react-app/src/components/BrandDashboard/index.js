import React from 'react'
import { useParams,Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'
import './BrandDashboard.css'
import { useHistory } from 'react-router-dom'


const BrandDashboardPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const { brandName } = useParams()


  useEffect(() => {
    dispatch(getSingleBrandThunk(1))
  }, [])


  return (
    <div className='dashboard-container'>

      <div className='side-menu'>
        <div className='inidividual-choice'>
          <i className="fa-solid fa-house"></i>
          <div className='side-bar-text'>Home</div>
        </div>
        <div className='inidividual-choice'>
          <i className="fa-solid fa-inbox"></i>
          <div className='side-bar-text'>Orders</div>
        </div>
        <div className='inidividual-choice'>
          <i className="fa-solid fa-tag fa-rotate-90"></i>
          <div className='side-bar-text'>Products</div>
        </div>
        <div className='inidividual-choice'>
          <i className="fa-solid fa-address-card"></i>
          <div className='side-bar-text'>Customers</div>
        </div>
        <div className='inidividual-choice'>
        <i className="fa-solid fa-chart-line"></i>
          <div className='side-bar-text'>Analytics</div>
        </div>
        <div className='inidividual-choice settings'>
          <i className="fa-solid fa-gear"></i>
          <div className='side-bar-text'>Settings</div>
        </div>


      </div>




      <div className='main-container'>


        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-cell" onClick={()=> history.push(`/store-dashboard/${brandName}/edit`)}>Edit Brand Details</div>
            <div className="grid-cell">My Products</div>
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
