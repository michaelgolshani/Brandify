import React, { useState } from "react";
import { useHistory, useParams, Route, Switch } from "react-router-dom";
import { Sidebar } from '../Sidebar';
import  EditBrandDetails  from "../EditBrandDetailsPage";
import  BrandDashboardPage  from "../BrandDashboard";
import AddProductPage  from "../AddProductPage";
import EditProductPage from "../EditProductPage";
import ProductListPage from "../ProductListPage";
// Import other components for Campaigns, Sales, Payouts, etc.

export const DashboardTopLevel = () => {
  const history = useHistory();
  const { brandName } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    setActiveItem(path);
    history.push(`/store-dashboard/${brandName}${path}`);
  };

  return (
    <div className={`dashboard-wrapper ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        activeItem={activeItem}
        onNavigate={handleNavigation}
      />

      <div className="dashboard-content">
        <Switch>
          <Route exact path="/store-dashboard/:brandName">
            <BrandDashboardPage />
          </Route>
          <Route exact path="/store-dashboard/:brandName/products">
            <ProductListPage />
          </Route>
          <Route exact path="/store-dashboard/:brandName/edit">
            <EditBrandDetails />
          </Route>
          <Route exact path="/store-dashboard/:brandName/new">
            <AddProductPage />
          </Route>
          <Route exact path="/store-dashboard/:brandName/:productId/edit">
            <EditProductPage update={true} />
          </Route>
          {/* Add routes for campaigns, sales, payouts */}
        </Switch>
      </div>
    </div>
  );
};

export default DashboardTopLevel;
