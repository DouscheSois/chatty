import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIST_ALL_POSTS_FAIL,
  LIST_ALL_POSTS_REQUEST,
  LIST_ALL_POSTS_SUCCESS,
  UPDATE_LIKE_REQUEST,
  UPDATE_LIKE_FAIL,
  UPDATE_LIKE_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_SUCCESS,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_FAIL,
  REMOVE_COMMENT_SUCCESS,
} from "../constants/postConstants";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LIST_ALL_POSTS_REQUEST:
    case ADD_POST_REQUEST:
    case UPDATE_LIKE_REQUEST:
    case DELETE_POST_REQUEST:
    case ADD_COMMENT_REQUEST:
    case REMOVE_COMMENT_REQUEST:
      return { loading: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case LIST_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_LIKE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    case ADD_POST_FAIL:
    case LIST_ALL_POSTS_FAIL:
    case UPDATE_LIKE_FAIL:
    case DELETE_POST_FAIL:
    case ADD_COMMENT_FAIL:
    case REMOVE_COMMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

// export const listPostsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case LIST_ALL_POSTS_REQUEST:
//       return { loading: true };
//     case LIST_ALL_POSTS_SUCCESS:
//       return { loading: false, payload: action.payload };
//     case LIST_ALL_POSTS_FAIL:
//       return { loading: false, error: action.payload };
//
//     default:
//       return state;
//   }
// };
