import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import BrandLoginPage from "./components/BrandLoginPage";
import CreateBrandPage from "./components/CreateBrandPage";
import BrandDashboardPage from "./components/BrandDashboard";
import { EditBrandDetails } from "./components/EditBrandDetailsPage";
import ProductListPage from "./components/ProductListPage";
import { ProductBuyPage } from "./components/ProductBuyPage";
import AddProductPage from "./components/AddProductPage";
import EditProductPage from "./components/EditProductPage";
import ProductPage from "./components/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import BrandHomePage from "./components/BrandHomePage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      {isLoaded && (
        <Switch>
          <Route exact path='/store/shoppingcart'>
            < ShoppingCart />
          </Route>
          <Route exact path='/store/:brandName/:productId'>
            <ProductPage />
          </Route>
          <Route exact path='/store/:brandName' >
            <BrandHomePage />
          </Route>
          <Route exact path='/store-dashboard/:brandName/:productId/edit'>
            <Navigation isLoaded={isLoaded} />
            <EditProductPage update={true} />
          </Route>
          <Route exact path='/store-dashboard/:brandName/new'>
            <Navigation isLoaded={isLoaded} />
            <AddProductPage />
          </Route>
          <Route exact path='/store-dashboard/:brandName/edit'>
            <Navigation isLoaded={isLoaded} />
            <EditBrandDetails />
          </Route>
          <Route exact path='/store-dashboard/:brandName'>
            <Navigation isLoaded={isLoaded} />
            <BrandDashboardPage />
          </Route>
          <Route exact path='/:brandName/products'>
            <Navigation isLoaded={isLoaded} />
            <ProductListPage />
          </Route>
          {/* <Route exact path='/productpage'>
            <ProductBuyPage />
          </Route> */}
          <Route exact path='/store-login'>
            <Navigation isLoaded={isLoaded} />
            <BrandLoginPage />
          </Route>
          <Route exact path='/create-brand'>
            <Navigation isLoaded={isLoaded} />
            <CreateBrandPage />
          </Route>
          <Route path="/login" >
            <Navigation isLoaded={isLoaded} />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Navigation isLoaded={isLoaded} />
            <SignupFormPage />
          </Route>
          <Route path='/'>
            <Navigation isLoaded={isLoaded} />
            <LandingPage />
          </Route>
          {/* <Route path='/'>
            <LandingPage />
          </Route> */}
          <Route path='/create-store'>
            <Navigation isLoaded={isLoaded} />
            <LandingPage />
          </Route>


        </Switch>
      )}
    </>
  );
}

export default App;
