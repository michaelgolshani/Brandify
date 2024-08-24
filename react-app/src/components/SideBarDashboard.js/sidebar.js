import React from "react";
import { NavLink } from "react-router-dom";

const NewSideBarDashboard = ({ brandName, brandOwner, isSidebarOpen, toggleSidebar }) => {
  const navItems = [
    {
      icon: "fa-home",
      label: "Dashboard",
      path: `/store-dashboard/${brandName}`,
    },
    { icon: "fa-store", label: "My Store", path: `/store/${brandName}` },
    { icon: "fa-box", label: "Products", path: `/store-dashboard/${brandName}/products` },
    { icon: "fa-cog", label: "Settings", path: `/store-dashboard/${brandName}/settings` },
  ];

  return (
    <>
      <nav className="sidebar">
        {isSidebarOpen && (
          <div className="welcome">
            <span>
              Welcome, {brandOwner.first_name && brandOwner.first_name}
            </span>
          </div>
        )}

        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="sidebar-item"
            activeClassName="active"
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        <i
          className={`fas ${
            isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        ></i>
      </button>
    </>
  );
};

export default NewSideBarDashboard;
