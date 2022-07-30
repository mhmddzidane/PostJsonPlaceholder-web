import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_DETAIL = "GET_POSTS_DETAIL";

export const getPosts = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getPostsDetail = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_POSTS_DETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_POSTS_DETAIL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get
        dispatch({
          type: GET_POSTS_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
