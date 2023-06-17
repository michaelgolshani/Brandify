import React from 'react'
import { useParams, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'
import './SideBarDashboard.css'
import { useHistory } from 'react-router-dom'


const SideBarDashboard = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const { brandName } = useParams()


  useEffect(() => {
    dispatch(getSingleBrandThunk(1))
  }, [])


  return (


    <div className='side-menu'>
      <div className='inidividual-choice' onClick={() => history.push(`/store-dashboard/${brandName}`)}>
        <i className="fa-solid fa-house"></i>
        <div className='side-bar-text' >Home</div>
      </div>
      <div className='inidividual-choice'>
        <i className="fa-solid fa-inbox"></i>
        <div className='side-bar-text'>Orders</div>
      </div>
      <div className='inidividual-choice' onClick={() => history.push(`/${brandName}/products`)}>
        <i className="fa-solid fa-tag fa-rotate-90"></i>
        <div className='side-bar-text' >Products</div>
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

  )
}


export default SideBarDashboard
