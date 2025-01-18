import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './BrandDashboard.css'

const BrandDashboardPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { brandName } = useParams()

  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
  }, [brandName])

  return (
    <div className='dashboard-container'>
      <main className="main-content">
        <header className="main-header">
          <h1>Hi, welcome back!</h1>
          <div className="dashboard-title">Brand Overview</div>
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </header>

        <div className="metrics-grid">
          <div className="metric-card gradient-pink" onClick={() => history.push(`/store-dashboard/${brandName}/edit`)}>
            <div className="metric-header">
              <h3>Brand Details</h3>
              <span className="metric-trend positive">
                <i className="fas fa-store"></i>
              </span>
            </div>
            <div className="metric-action">
              <div className="action-icon pink">
                <i className="fas fa-pencil"></i>
              </div>
              <p>Update your brand information and settings</p>
              <button className="view-btn">Edit Details</button>
            </div>
          </div>

          <div className="metric-card gradient-yellow" onClick={() => history.push(`/${brandName}/products`)}>
            <div className="metric-header">
              <h3>My Products</h3>
              <span className="metric-trend positive">
                <i className="fas fa-box"></i>
              </span>
            </div>
            <div className="metric-action">
              <div className="action-icon yellow">
                <i className="fas fa-tags"></i>
              </div>
              <p>Manage your product inventory and listings</p>
              <button className="view-btn">View Products</button>
            </div>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card gradient-green" onClick={() => history.push(`/store/${brandName}`)}>
            <div className="metric-header">
              <h3>My Store</h3>
              <span className="metric-trend positive">
                <i className="fas fa-shopping-bag"></i>
              </span>
            </div>
            <div className="metric-action">
              <div className="action-icon green">
                <i className="fas fa-store"></i>
              </div>
              <p>View your store as customers see it</p>
              <button className="view-btn">Visit Store</button>
            </div>
          </div>

          <div className="metric-card gradient-purple" onClick={() => history.push(`/store-dashboard/${brandName}/new`)}>
            <div className="metric-header">
              <h3>Add New Product</h3>
              <span className="metric-trend positive">
                <i className="fas fa-plus"></i>
              </span>
            </div>
            <div className="metric-action">
              <div className="action-icon purple">
                <i className="fas fa-plus"></i>
              </div>
              <p>Create and list a new product in your store</p>
              <button className="view-btn">Create Product</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BrandDashboardPage
