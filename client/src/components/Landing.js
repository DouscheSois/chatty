import React from "react";
import { Link } from "react-router-dom";

import Team from "../media/team.jpg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h4 className="landing-title">
          Welcome to Chatty, a place where we never stop talking
        </h4>
        <p>Come login, or create an account, and start chattin it up</p>
        <div className="team">
          <h4>Meet the team!</h4>
          <img src={Team} alt="team"></img>
        </div>
        <div className="landing-links">
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
