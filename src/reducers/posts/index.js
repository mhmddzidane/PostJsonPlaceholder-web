import { GET_POSTS, GET_POSTS_DETAIL } from "../../action/getPostsAction";

const initialState = {
  getPostResult: false,
  getPostLoading: false,
  getPostError: false,

  getPostDetailResult: false,
  getPostDetailLoading: false,
  getPostDetailError: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        getPostResult: action.payload.data,
        getPostLoading: action.payload.loading,
        getPostError: action.payload.errorMessage,
      };
    case GET_POSTS_DETAIL:
      return {
        ...state,
        getPostDetailResult: action.payload.data,
        getPostDetailLoading: action.payload.loading,
        getPostDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posts;
