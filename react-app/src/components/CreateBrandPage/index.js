import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './CreateBrandPage.css';
import { createBrandThunk } from "../../store/brands";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




const CreateBrandPage = () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [story, setStory] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([]);

  console.log("NAME", name)
  console.log("STORY", story)
  console.log("Description", description)
  // if (sessionUser) return <Redirect to="/" />;

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
    console.log(formData)

    await dispatch(createBrandThunk(formData))
    history.push(`/store-dashboard/${name}`)


  };

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
            </label>
            <label>
              Description <span className="create-brand-small-text">(i.e. We are an xyz company that specializes in selling xyz... )</span>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="login-input description"
              />
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
