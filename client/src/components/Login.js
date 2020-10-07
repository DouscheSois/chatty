import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../actions/auth";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuth) {
    return <Redirect to="/wall" />;
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <i className="fas fa-user fa-2x"></i>
        <h4 className="title">Login</h4>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="login-form-submit" value="Login" />
        <p>
          Need have an account? <Link to="/registration">Register</Link>
        </p>
        <small>*Any information you give to us will not be shared.</small>
      </form>
    </div>
  );
};

export default Login;
