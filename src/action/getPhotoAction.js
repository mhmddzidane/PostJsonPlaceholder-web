import axios from "axios";

export const GET_PHOTOS = "GET_PHOTOS";
export const GET_PHOTOS_DETAIL = "GET_PHOTOS_DETAIL";

export const getPhoto = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_PHOTOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_PHOTOS,
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
          type: GET_PHOTOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getPhotoDetail = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_PHOTOS_DETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/photos/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_PHOTOS_DETAIL,
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
          type: GET_PHOTOS_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
