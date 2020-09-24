import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types";
import setAuthToken from "../utilities/setAuthToken";

// Load User
export const loadUser = () => async (send) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/login");

    send({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    send({
      type: AUTH_ERROR,
    });
  }
};

//Login User
export const login = (email, password) => async (send) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/login", body, config);

    send({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    send(loadUser());
  } catch (err) {
    console.error(err.message);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    send({
      type: LOGIN_FAILURE,
    });
  }
};

//Register User
export const registration = ({
  firstName,
  lastName,
  email,
  password,
}) => async (send) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ firstName, lastName, email, password });

  try {
    const res = await axios.post("/registration", body, config);

    send({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    });
    send(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => console.log("Error"));
    }

    send({
      type: REGISTRATION_FAILURE,
    });
  }
};

//Logout User
export const logout = () => (send) => {
  send({ type: LOGOUT });
};
