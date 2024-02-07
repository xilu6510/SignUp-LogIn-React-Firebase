import { Link, useNavigate } from "react-router-dom";
import React from "react";
import googleIcon from "../../images/search.png";
import facebookIcon from "../../images/facebook.png";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

import { db } from "../../FirebaseConfig";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(db, email, password)
      .then((data) => {
        console.log(data, "authData");
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err.code);
      });
    e.target.reset();
  };

  return (
    <div className="main-container login-page">
      <h1>Sign In</h1>
      <div className="flex-text">
        <p className="des-top">New to Our Product?</p>
        <Link to="/" className="redirect-links">
          Create an Account
        </Link>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="email-block">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="block-style"
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="pass-block">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="block-style"
            placeholder="Create Password"
            required
          />
        </div>

        <div className="signin-block">
          <label>
            <input type="checkbox" />
            Keep me signed in
          </label>
        </div>
        <button className="submit">Sign In</button>
      </form>

      <Link to="/forgot-pw" className="redirect-links forgot-password">
        Forgot your password?
      </Link>

      <hr />

      <p className="des-bottom">Or sign in using:</p>

      <div className="block-style other-logins" id="google-login">
        <img className="icons" src={googleIcon} alt="google icon" />
        <Link className="redirect-links" to="/">
          Continue with Google
        </Link>
      </div>
      <div className="block-style other-logins">
        <img className="icons" src={facebookIcon} alt="facebook icon" />
        <Link className="redirect-links" to="/">
          Continue with Facebook
        </Link>
      </div>
    </div>
  );
};
