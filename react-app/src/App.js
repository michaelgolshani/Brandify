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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
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
            <EditProductPage update={true} />
          </Route>
          <Route exact path='/store-dashboard/:brandName/new'>
            <AddProductPage />
          </Route>
          <Route exact path='/store-dashboard/:brandName/edit'>
            <EditBrandDetails />
          </Route>
          <Route exact path='/store-dashboard/:brandName'>
            <BrandDashboardPage />
          </Route>
          <Route exact path='/:brandName/products'>
            <ProductListPage />
          </Route>
          <Route exact path='/productpage'>
            <ProductBuyPage />
          </Route>
          <Route exact path='/store-login'>
            <BrandLoginPage />
          </Route>
          <Route exact path='/create-brand'>
            <CreateBrandPage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
          <Route path='/create-store'>
            <LandingPage />
          </Route>


        </Switch>
      )}
    </>
  );
}

export default App;
