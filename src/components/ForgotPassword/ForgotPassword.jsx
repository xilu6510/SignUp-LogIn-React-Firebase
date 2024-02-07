import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { db } from "../../FirebaseConfig";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(db, email)
      .then((data) => {
        navigate("/confirm-email");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div className="forgotpw-page">
      <h1>Password Reset</h1>

      <p className="des-top">We Will Help You Reset your Password</p>

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

        <button className="submit">Reset Password</button>
      </form>

      <hr />

      <p className="des-bottom">Remembered your Password?</p>

      <div className="block-style other-logins">
        <Link className="redirect-links" to="/signin">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};
