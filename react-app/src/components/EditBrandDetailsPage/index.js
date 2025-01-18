import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateBrandThunk, deleteBrandThunk, getAllBrandsThunk, getSingleBrandThunk } from '../../store/brands';
import LoadingButton from '../LoadingButton';
import './EditBrandDetailsPage.css'

export const EditBrandDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoading, setIsLoading] = useState(true)
  const state = useSelector((state) => state);
  const { brandName } = useParams()



  const brands = state.brands

  const brandsArr = Object.values(brands.allBrands)





  let myBrandArr = []
  for (let i = 0; i < brandsArr.length; i++) {
    let brand = brandsArr[i]





    if (brand.admin_id == state.session.user.id) {
      myBrandArr.push(brand)
    }
  }



  const oldBrand = useSelector((state) => state.brands.singleBrand)


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






  // if (sessionUser) return <Redirect to="/" />;

  const handleDelete = async () => {
    await dispatch(deleteBrandThunk(brandName))
    history.push(`/store-login`)

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
    <div className='dashboard-container'>
      <main className="main-content">
        <header className="main-header">
          <div className="header-left">
            <button
              className="back-button"
              onClick={() => history.push(`/store-dashboard/${brandName}`)}
            >
              <i className="fas fa-arrow-left"></i>
              <span>Back to Dashboard</span>
            </button>
          </div>
          <div className="dashboard-title">Edit Details</div>
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </header>

        <div className="edit-brand-content">
          <form onSubmit={handleSubmit} className="edit-form">
            <div className="form-section">
              <div className="section-header">
                <h3>Basic Information</h3>
                <p>Update your brand's core details</p>
              </div>

              <div className="input-group">
                <label>
                  Brand Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter brand name"
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  Brand Slogan
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter brand slogan"
                  />
                  {errors.description && <p className="error-message">{errors.description}</p>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  Brand Story
                  <textarea
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    required
                    className="form-input textarea"
                    placeholder="Tell your brand's story"
                  />
                  {errors.story && <p className="error-message">{errors.story}</p>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  Theme
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="form-input"
                  >
                    <option value="modern">Modern</option>
                    <option value="poppy">Poppy</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="action-button primary">
                Update Brand
              </button>
              <button type="button" className="action-button danger" onClick={handleDelete}>
                Delete Brand
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default EditBrandDetails;
