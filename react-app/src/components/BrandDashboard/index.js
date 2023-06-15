import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'


const BrandDashboardPage = () => {

  const dispatch = useDispatch()

  const {brandId} = useParams()


  useEffect(() => {
    dispatch(getSingleBrandThunk(1))
  },[])


  return (
    <div>

        <div>Apple</div>

        <div>Orders</div>

        <div>Edit Brand</div>






    </div>
  )
}


export default BrandDashboardPage
