import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (sessionUser) {
      history.push('/store-login');
    }
  }, [sessionUser, history]);

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []); // Scroll to bottom on initial render

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleDemoLogin = async (e) => {

    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }

    history.push('/store-login')

  };

  return (
    <>
      <div className="login-full-container">
        <div className="login-container">

          <form onSubmit={handleSubmit} className="form-container">
            <h2 className="login-title">Log In</h2>
            <p className="login-continue"> Continue to Brandify</p>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx} className="login-errors">{error}</li>
              ))}
            </ul>
            <label>
              {/* Email */}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </label>
            <label>
              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </label>
            <div className="login-form-button-container">
            <button className="login-form-button" type="submit">Log In</button>
            <button className="login-form-button" type="submit" onClick={handleDemoLogin}>Demo User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
