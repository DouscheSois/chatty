import axios from "axios";
import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../constants/userConstants";

import Message from "../components/Message";

export const addPost = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });

    const res = await api.post("/post", formData);

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: res.data,
    });

    dispatch(Message("Post Created", "success"));
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
