import axios from "axios";
import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIST_ALL_POSTS_REQUEST,
  LIST_ALL_POSTS_FAIL,
  LIST_ALL_POSTS_SUCCESS,
} from "../constants/postConstants";

import Message from "../components/Message";

export const addPost = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/posts/wall", { formData }, config);

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    });
    console.log("success");
    // dispatch(Message("Post Created", "success"));
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

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ALL_POSTS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/api/posts/wall", config);

    dispatch({
      type: LIST_ALL_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
