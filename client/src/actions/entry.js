// import axios from "axios";
// import {
//   ADD_ENTRY,
//   ENTRY_ERROR,
//   GET_ENTRIES,
// } from "../constants/userConstants";
//
// export const addEntry = (formData) => async (send) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const res = await axios.post("/entry", formData, config);
//
//     send({
//       type: ADD_ENTRY,
//       payload: res.data,
//     });
//   } catch (err) {
//     send({
//       type: ENTRY_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
//
// export const getEntries = () => async (send) => {
//   try {
//     const res = await axios.get(`/entry`);
//
//     send({
//       type: GET_ENTRIES,
//       payload: res.data,
//     });
//   } catch (err) {
//     send({
//       type: ENTRY_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
