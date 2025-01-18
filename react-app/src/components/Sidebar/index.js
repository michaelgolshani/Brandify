import React from "react";
import { useHistory, useParams } from "react-router-dom";

const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
    </div>
  );
};

export const Sidebar = ({ isOpen, onToggle, activeItem, onNavigate }) => {
  const { brandName } = useParams();

  const handleNavigation = (path, itemName) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="logo-text">{brandName}</span>
      </div>

      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={onToggle}>
        <i className={`fas ${isOpen ? 'fa-right-to-bracket' : 'fa-chevron-right'}`}></i>
      </button>

      <nav className="nav-menu">
        <NavItem
          icon="fa-table-cells-large"
          label="Dashboard"
          isActive={activeItem === ''}
          onClick={() => handleNavigation('')}
        />

        <NavItem
          icon="fa-box"
          label="Products"
          isActive={activeItem === '/products'}
          onClick={() => handleNavigation('/products')}
        />

        <NavItem
          icon="fa-bullhorn"
          label="Campaigns"
          isActive={activeItem === '/campaigns'}
          onClick={() => handleNavigation('/campaigns')}
        />

        <NavItem
          icon="fa-chart-line"
          label="Sales"
          isActive={activeItem === '/sales'}
          onClick={() => handleNavigation('/sales')}
        />

        <NavItem
          icon="fa-wallet"
          label="Payouts"
          isActive={activeItem === '/payouts'}
          onClick={() => handleNavigation('/payouts')}
        />

        <NavItem
          icon="fa-cog"
          label="Settings"
          isActive={activeItem === '/edit'}
          onClick={() => handleNavigation('/edit')}
        />
      </nav>

      <div
        className="new-product-btn"
        onClick={() => handleNavigation('/new')}
      >
        <i className="fas fa-plus"></i>
        <span className="btn-text">New product</span>
      </div>
    </aside>
  );
};
