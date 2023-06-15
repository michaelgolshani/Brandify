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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/store-login'>
            <BrandLoginPage />
          </Route>
          <Route exact path = '/store-dashboard/:brandname'>
            <BrandDashboardPage/>
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
