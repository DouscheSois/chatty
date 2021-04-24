// import { ENTRY_ERROR, ADD_ENTRY, GET_ENTRIES } from "../actions/types";
//
// const initialState = {
//   entries: [],
//   entry: null,
//   isloading: true,
//   error: {},
// };
//
// export default function (state = initialState, action) {
//   const { type, payload } = action;
//
//   switch (type) {
//     case GET_ENTRIES:
//       return {
//         ...state,
//         entries: payload,
//         isloading: false,
//       };
//     case ADD_ENTRY:
//       return {
//         ...state,
//         entries: [payload, ...state.entries],
//         isloading: false,
//       };
//     case ENTRY_ERROR:
//       return {
//         ...state,
//         error: payload,
//         isloading: false,
//       };
//
//     default:
//       return state;
//   }
// }
