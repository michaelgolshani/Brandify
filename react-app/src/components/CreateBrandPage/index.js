import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './CreateBrandPage.css';
import { createBrandThunk } from "../../store/brands";




const CreateBrandPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [story, setStory] = useState("")
  const [description,setDescription] = useState("")
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
  name,
  story,
  description
}
// let newBrand = await
console.log(formData)

await dispatch(createBrandThunk(formData))


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
              Let's get started. What is your brand name?
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
              Story
              <input
                type="text"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
                className="login-input"
              />
            </label>
            <label>
              Description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="login-input"
              />
            </label>
            <button type="submit">Create Brand</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBrandPage
