import React from "react";
import { Link } from "react-router-dom";

import Mlk from "../media/mlk.jpeg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h4 className="landing-title">
          Chatty is a safe platform where users can speak freely with complete
          privacy
        </h4>
        <p>Login, or create an account, and start sharing!</p>
        <img src={Mlk} alt="mlk"></img>
        <div className="landing-links">
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
