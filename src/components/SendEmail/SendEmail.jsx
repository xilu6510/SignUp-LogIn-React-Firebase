import React from "react";
import "./SendEmail.css";
import sendIcon from "../../images/Pasted.png";
import { Link } from "react-router-dom";

export const SendEmail = () => {
  return (
    <div className="send-page">
      <img src={sendIcon} alt="send-email-icon" />
      <h1>Almost There!</h1>
      <p className="des-top">Check your email inbox and confirm your account</p>

      <hr />

      <p className="des-bottom">Didn’t receive any mail?</p>

      <div className="block-style other-logins">
        <Link className="redirect-links" to="/#">
          Resend Confirmation
        </Link>
      </div>
    </div>
  );
};
