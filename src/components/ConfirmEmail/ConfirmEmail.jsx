import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmEmail.css";

export const ConfirmEmail = () => {
  return (
    <div className="confirm-page">
      <h1>Confirm Email</h1>
      <p className="des-top">Check Your Email and Enter Confirmation Code</p>

      <form>
        <div className="pass-block">
          <label>Confirmation Code</label>
          <input
            type="text"
            className="block-style"
            placeholder="Enter Code"
            required
          />
        </div>
        <button className="submit">Confirm Email</button>
      </form>

      <hr />

      <p className="des-bottom">Haven’t received your code?</p>

      <div className="block-style other-logins">
        <Link className="redirect-links" to="/#">
          Resend Code
        </Link>
      </div>
    </div>
  );
};
