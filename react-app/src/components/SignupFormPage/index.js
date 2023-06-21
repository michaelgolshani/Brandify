import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  return (
    <>
      <div className="login-full-container">
        <div className="login-container">
          <form onSubmit={handleSubmit} className="form-container">
            <h1 className="login-title">Sign Up</h1>
            <p className="login-continue">with Brandify</p>

            <ul>
              {errors.map((error, idx) => <li key={idx} className="login-errors">{error}</li>)}
            </ul>
            <label>
              {/* Email */}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="login-input"
              />
            </label>
            <label>
              {/* Username */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
                className="login-input"
              />
            </label>
            <label>
              {/* Password */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="login-input"
              />
            </label>
            <label>
              {/* Confirm Password */}
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                className="login-input"
              />
            </label>
            <div className="login-form-button-container">
              <button className="login-form-button signup-form-button" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
