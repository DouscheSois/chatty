// export default function (state = initialState, action) {
//   const { type, payload } = action;
//
//   switch (type) {
//     case USER_LOADED:
//       return {
//         ...state,
//         isAuth: true,
//         isloading: false,
//         user: payload,
//       };
//     case LOGIN_SUCCESS:
//     case REGISTRATION_SUCCESS:
//       localStorage.setItem("token", payload.token);
//       return {
//         ...state,
//         ...payload,
//         isAuth: true,
//         isloading: false,
//       };
//     case AUTH_ERROR:
//     case REGISTRATION_FAILURE:
//     case LOGIN_FAILURE:
//     case LOGOUT:
//     case DELETE_ACCOUNT:
//       localStorage.removeItem("token");
//       return {
//         ...state,
//         token: null,
//         isAuth: false,
//         isloading: false,
//       };
//
//     case DELETE_ACCOUNT_ERROR:
//       return {
//         ...state,
//         isAuth: false,
//         isloading: false,
//       };
//
//     default:
//       return state;
//   }
// }
