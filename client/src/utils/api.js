// import axios from "axios";
// import store from "../store";
// import { USER_LOGOUT } from "../constants/userConstants";
//
// const api = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// **/
//
// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: USER_LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );
//
// export default api;
