import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../actions/auth";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isloading = useSelector((state) => state.auth.isloading);

  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(logout());
  };

  const privateLinks = (
    <div className="dropdown-menu">
      <button className="dropdown-button">
        <i className="fas fa-plus-square fa-2x"></i>
      </button>
      <div className="dropdown-content">
        <Link to="/wall">
          <i className="fas fa-globe"></i> Wall
        </Link>
        <a className="navbar-link" onClick={(e) => onClick(e)} href="#!">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>
    </div>
  );

  const publicLinks = (
    <div className="dropdown-menu">
      <button className="dropdown-button">
        <i className="fas fa-plus-square fa-2x"></i>
      </button>
      <div className="dropdown-content">
        <Link to="/registration">
          <i className="fas fa-user-plus"></i> Register
        </Link>
        <Link to="/login">
          <i className="fas fa-user-plus"></i> Login
        </Link>
      </div>
    </div>
  );

  return (
    <div className="navbar">
      <li>
        <Link to="/wall">
          <i className="far fa-smile"></i> Chatty
        </Link>
      </li>
      {!isloading && <Fragment>{isAuth ? privateLinks : publicLinks}</Fragment>}
    </div>
  );
};

export default Navbar;
