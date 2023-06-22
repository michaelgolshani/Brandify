import React from 'react'
import { useEffect } from 'react'
import CreateBrandPage from '../CreateBrandPage';
import { createBrandThunk, deleteBrandThunk } from '../../store/brands';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBrandThunk } from '../../store/brands';
import { useParams } from 'react-router-dom';
import { getSingleBrandThunk } from '../../store/brands';
import { FormDataProvider } from '../../context/FormDataContext';
import { FormDataContext } from '../../context/FormDataContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LoadingButton from '../LoadingButton';


export const EditBrandDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoading, setIsLoading] = useState(true)
  const state = useSelector((state) => state);


  const { brandName } = useParams()



  console.log("BRAND NAME", brandName)


  const oldBrand = useSelector((state) => state.brands.singleBrand)
  console.log("BRAND TO UPDATE ", oldBrand)

  const [name, setName] = useState(oldBrand.name);
  const [story, setStory] = useState(oldBrand.story)
  const [description, setDescription] = useState(oldBrand.description)
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
  }, [dispatch])

  // const formDataContext = useContext(FormDataContext);
  // const { formData, updateFormData } = formDataContext;

  useEffect(() => {
    if (oldBrand.name) {

      setName(oldBrand.name)
      setStory(oldBrand.story)
      setDescription(oldBrand.description)
    }
  }, [oldBrand, brandName]);





  console.log("NAME", name)
  console.log("STORY", story)
  console.log("Description", description)
  // if (sessionUser) return <Redirect to="/" />;

  const handleDelete = async () => {

    await dispatch(deleteBrandThunk(brandName))
    history.push(`/store-login`)

    console.log("SUCCESSFULLY DELETED")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = await dispatch(login(email, password));
    // if (data) {
    //   setErrors(data);
    // }
    const formData = {
      name: name.trim(),
      story,
      description
    }
    // let newBrand = await
    console.log("FORM DATA", formData)

    await dispatch(updateBrandThunk(formData, brandName))

    history.push(`/store-dashboard/${name}`)
  };




  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    },200)
    return () => clearTimeout(timeout)
  },[])

  if (isLoading) {
    return <LoadingButton />
  }


  if (!oldBrand) {
    return <h1>loading....</h1>
  }


  return (
    <>
      <div className="create-brand-full-container">
        <div className="create-brand-container">

          <form onSubmit={handleSubmit} className="form-container">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="create-brand-top-header-store">
              Brand Details
            </div>
            <div className="create-brand-top-header-store-bottom">
              Edit your brand.
            </div>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="login-input"
              />
            </label>
            <label>
              Brand Story
              <textarea
                type="text"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
                className="login-input brand-story"
              />
            </label>
            <label>
              Description
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="login-input description"
              />
            </label>
            <div className="login-form-button-container">
              <button className="login-form-button create-brand-create-button" type="submit">Update Brand</button>
            </div>
          </form>
          <button  className="edit-brand-delete-button "onClick={handleDelete}>Delete Brand</button>
        </div>
      </div>
    </>
  );
}

export default CreateBrandPage
