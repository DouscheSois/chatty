// import api from "../utils/api";
// import {
//   ADD_POST_FAIL,
//   ADD_POST_REQUEST,
//   ADD_POST_SUCCESS,
//   // GET_ALL_POSTS_REQUEST,
//   // GET_ALL_POSTS_FAIL,
//   // GET_ALL_POSTS_SUCCESS,
// } from "../constants/postConstants";
//
// import { logout } from "./userActions";
//
// // import Message from "../components/Message";
//
// // export const listPosts = (keyword = "", pageNumber = "") => async (
// //   dispatch
// // ) => {
// //   try {
// //     dispatch({
// //       type: GET_ALL_POSTS_REQUEST,
// //     });
// //
// //     const { data } = await axios.get(
// //       `/api/posts/wall?keyword=${keyword}&pageNumber=${pageNumber}`
// //     );
// //
// //     dispatch({
// //       type: GET_ALL_POSTS_SUCCESS,
// //       payload: data,
// //     });
// //   } catch (error) {
// //     dispatch({
// //       type: GET_ALL_POSTS_FAIL,
// //       payload: {
// //         msg: error.response.statusText,
// //         status: error.response.status,
// //       },
// //     });
// //   }
// // };
//
// export const addPost = () => async (dispatch, formData) => {
//   try {
//     const res = await api.post("/api/posts", formData);
//
//     dispatch({
//       type: ADD_POST_SUCCESS,
//       payload: res.data,
//     });
//
//     dispatch(console.log("success n add post frm actions"));
//   } catch (err) {
//     dispatch({
//       type: ADD_POST_FAIL,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
//
// // export const addPost = (formData) => async (dispatch) => {
// //   try {
// //     dispatch({
// //       type: ADD_POST_REQUEST,
// //     });
// //
// //     const res = await api.post("/api/posts", formData);
// //
// //     dispatch({
// //       type: ADD_POST_SUCCESS,
// //       payload: res.data,
// //     });
// //     console.log("successAction");
// //     // dispatch(Message("Post Created", "success"));
// //   } catch (error) {
// //     dispatch({
// //       type: ADD_POST_FAIL,
// //       payload:
// //         error.response && error.response.data.message
// //           ? error.response.data.message
// //           : error.message,
// //     });
// //   }
// // };
