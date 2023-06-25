import React from 'react'
import { useEffect } from 'react'
import CreateBrandPage from '../CreateBrandPage';
import { createBrandThunk, deleteBrandThunk, getAllBrandsThunk } from '../../store/brands';
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


  console.log("STATE", state)
  const brands = state.brands
  console.log(brands.allBrands)
  const brandsArr = Object.values(brands.allBrands)
  console.log("BRANDS ARR", brandsArr)

  console.log("BRAND NAME", brandName)


  let myBrandArr = []
  for (let i = 0; i < brandsArr.length; i++) {
    let brand = brandsArr[i]

    console.log(brand)
    console.log("Admin id", brand.admin_id)
    console.log("user id", state.session.user.id)
    console.log(myBrandArr)
    if (brand.admin_id == state.session.user.id) {
      myBrandArr.push(brand)
    }
  }



  const oldBrand = useSelector((state) => state.brands.singleBrand)
  console.log("BRAND TO UPDATE ", oldBrand)

  const [name, setName] = useState(oldBrand.name);
  const [story, setStory] = useState(oldBrand.story)
  const [description, setDescription] = useState(oldBrand.description)
  const [theme, setTheme] = useState(oldBrand.theme);
  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
    dispatch(getAllBrandsThunk())
  }, [dispatch])

  // const formDataContext = useContext(FormDataContext);
  // const { formData, updateFormData } = formDataContext;

  useEffect(() => {
    if (oldBrand.name) {
      setName(oldBrand.name)
      setStory(oldBrand.story)
      setDescription(oldBrand.description)
      setTheme(oldBrand.theme)
    }
  }, [oldBrand, brandName]);


  console.log("NAME", name)
  console.log("STORY", story)
  console.log("Description", description)
  console.log("THEME", theme)
  // if (sessionUser) return <Redirect to="/" />;

  const handleDelete = async () => {
    await dispatch(deleteBrandThunk(brandName))
    history.push(`/store-login`)
    console.log("SUCCESSFULLY DELETED")
  }


  const validate = () => {
    const errors = {}

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length > 50) {
      errors.name = "Name must be less than 50 characters";
    } else if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
      errors.name = "Name cannot contain special characters";
    } else {
      for (let i = 0; i < myBrandArr.length; i++) {
        if (myBrandArr[i].admin_id !== state.session.user.id && myBrandArr[i].name.toLowerCase() === name.trim().toLowerCase()) {
          errors.name = "You already have a brand with this name";
          break;
        }
      }
    }
    if (!story) {
      errors.story = "Story is required";
    }
    if (story.length > 450) {
      errors.story = `Brand story must be less than 450 characters. You currently have ${story.length}`
    }
    if (!description) {
      errors.description = "Slogan is required";
    }
    if (description.length > 30) {
      errors.description = `Slogan must be less than 30 characters. You currently have ${description.length}`
    }

    console.log("ERRORS", errors)
    return errors
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate()
    const errorContent = Object.values(errors)
    if (errorContent.length) return setErrors(errors)


    const formData = {
      name: name.trim(),
      story,
      description,
      theme
    }
    // let newBrand = await
    console.log("FORM DATA", formData)

    await dispatch(updateBrandThunk(formData, brandName))

    history.push(`/store-dashboard/${name}`)
  };




  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    return () => clearTimeout(timeout)
  }, [])

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
              {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <label>
              Brand Slogan
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="login-input description"
              />
              {errors.description && <p className="error">{errors.description}</p>}
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
              {errors.story && <p className="error">{errors.story}</p>}
            </label>
            <label>
              Theme
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="login-input"
              >
                <option value="modern">Modern</option>
                <option value="poppy">Poppy</option>
              </select>
            </label>

            <div className="login-form-button-container">
              <button className="login-form-button create-brand-create-button" type="submit">Update Brand</button>
            </div>
          </form>
          <button className="edit-brand-delete-button " onClick={handleDelete}>Delete Brand</button>
        </div>
      </div>
    </>
  );
}

export default CreateBrandPage
