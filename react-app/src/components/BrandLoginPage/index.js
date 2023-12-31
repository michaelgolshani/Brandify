import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './BrandLoginPage.css';
import { useHistory } from 'react-router-dom'
import { getAllBrandsThunk } from "../../store/brands";
import LoadingButton from "../LoadingButton";




const BrandLoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    dispatch(getAllBrandsThunk())
  }, [])


  const state = useSelector((state) => state)

  const brands = state.brands

  const brandsArr = Object.values(brands.allBrands)




  let myBrandArr = []
  for (let i = 0; i < brandsArr.length; i++) {
    let brand = brandsArr[i]





    if (brand.admin_id == state.session.user.id) {
      myBrandArr.push(brand)
    }
  }



  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  // if (myBrandArr.length < 1) {
  //   return <h1>loading....</h1>
  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingButton />
  }

  return (
    <>
      <div className="login-full-container">
        <div className="brand-login-container">
          <div className="top-header-store">
            <h2 className="storesbrand-login">Brands</h2>

            <button className="create-store-button" onClick={() => history.push('/create-brand')}> Create another brand</button>
          </div>
          <div onSubmit={handleSubmit} className="brand-list-form-container">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="brand-login-brand-outer-container">
              {myBrandArr.length == 0 && (
                <div>You have no brands. Lets create one.</div>
              )}
              {myBrandArr.map((brand, index) => (
                <div className="brand-login-brand-container" onClick={() => history.push(`/store-dashboard/${brand.name}`)} key={index}>
                  <div>{brand.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandLoginPage
