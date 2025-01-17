import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./DashboardHome.css";

const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
    </div>
  );
};

const DashboardHome = () => {
  const history = useHistory();
  const { brandName } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-wrapper ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">{brandName}</span>
        </div>

        {/* Toggle Button */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? 'fa-right-to-bracket' : 'fa-chevron-right'}`}></i>
        </button>

        <nav className="nav-menu">
          <NavItem
            icon="fa-table-cells-large"
            label="Dashboard"
            isActive={activeItem === 'dashboard'}
            onClick={() => {
              setActiveItem('dashboard');
              history.push(`/store-dashboard/${brandName}`);
            }}
          />

          <NavItem
            icon="fa-box"
            label="Products"
            isActive={activeItem === 'products'}
            onClick={() => {
              setActiveItem('products');
              history.push(`/${brandName}/products`);
            }}
          />

          <NavItem
            icon="fa-bullhorn"
            label="Campaigns"
            isActive={activeItem === 'campaigns'}
            onClick={() => setActiveItem('campaigns')}
          />

          <NavItem
            icon="fa-chart-line"
            label="Sales"
            isActive={activeItem === 'sales'}
            onClick={() => setActiveItem('sales')}
          />

          <NavItem
            icon="fa-wallet"
            label="Payouts"
            isActive={activeItem === 'payouts'}
            onClick={() => setActiveItem('payouts')}
          />

          <NavItem
            icon="fa-cog"
            label="Settings"
            isActive={activeItem === 'settings'}
            onClick={() => {
              setActiveItem('settings');
              history.push(`/store-dashboard/${brandName}/edit`);
            }}
          />
        </nav>

        <div className="new-product-btn" onClick={() => history.push(`/store-dashboard/${brandName}/new`)}>
          <i className="fas fa-plus"></i>
          <span className="btn-text">New product</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Hi, welcome back!</h1>
          <div className="dashboard-title">Dashboard</div>
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </header>

        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-header">
              <h3>Outstanding owed</h3>
              <span className="metric-trend positive">↑ 14.5%</span>
            </div>
            <div className="metric-value">
              <span className="currency">$</span>
              <span className="amount">640</span>
              <span className="decimals">.80</span>
            </div>
            <div className="metric-action">
              <div className="action-icon pink">
                <i className="fas fa-bolt"></i>
              </div>
              <p>Payouts occur between the 1st and 3rd of each month.</p>
              <button className="view-btn">View sale</button>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <h3>Total payout</h3>
            </div>
            <div className="metric-value">
              <span className="currency">$</span>
              <span className="amount">29,688</span>
              <span className="decimals">.00</span>
            </div>
            <div className="metric-action">
              <div className="action-icon yellow">
                <i className="fas fa-wallet"></i>
              </div>
              <p>Update your payout method in Settings</p>
              <button className="view-btn">View payouts</button>
            </div>
          </div>
        </div>

        <div className="earnings-section">
          <div className="earnings-header">
            <h3>Earnings history</h3>
            <div className="time-filters">
              <span>Today</span>
              <span>Last week</span>
              <span>Last month</span>
              <span>Last 6 months</span>
              <span className="active">All time</span>
            </div>
          </div>

          <div className="earnings-chart">
            <div className="chart-info">
              <div className="earning-amount">
                <span>Earning</span>
                <h4>$1469.88</h4>
              </div>
            </div>
            {/* Chart component would go here */}
            {/* Example: <LineChart data={chartData} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
