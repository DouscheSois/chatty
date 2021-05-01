import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../constants/postConstants";

const initialState = {
  entries: [],
  entry: null,
  isloading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST_REQUEST:
      return { isloading: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        entries: [payload, ...state.entries],
        isloading: false,
      };
    case ADD_POST_FAIL:
      return { isloading: false, error: action.payload };

    default:
      return state;
  }
}
