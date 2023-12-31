import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './CreateBrandPage.css';
import { createBrandThunk } from "../../store/brands";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllBrandsThunk } from "../../store/brands";




const CreateBrandPage = () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [story, setStory] = useState("")
  const [description, setDescription] = useState("")
  const [theme, setTheme] = useState("modern");
  const [errors, setErrors] = useState({})


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
        if (myBrandArr[i].name.toLowerCase() === name.trim().toLowerCase()) {
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


    await dispatch(createBrandThunk(formData))
    history.push(`/store-dashboard/${name}`)


  };

  return (
    <>
      <div className="create-brand-full-container">
        <div className="create-brand-container">

          <form onSubmit={handleSubmit} className="form-container">
            <div className="create-brand-top-header-store">
              Let's get started.
            </div>
            <div className="create-brand-top-header-store-bottom">
              Share with us your brand details.
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
              {errors.name && <p className="create-brand-error">{errors.name}</p>}
            </label>
            <label>
              Brand Slogan <span className="create-brand-small-text">(i.e. Just Do It, Think Different... )</span>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="login-input description"
              />
              {errors.description && <p className="create-brand-error">{errors.description}</p>}
            </label>
            <label>
              Brand Story <span className="create-brand-small-text">(What is the purpose for starting your brand?)</span>
              <textarea
                type="text"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
                className="login-input brand-story"
              />
              {errors.story && <p className="create-brand-error">{errors.story}</p>}
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
              <button className="login-form-button create-brand-create-button" type="submit">Create Brand</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBrandPage
