import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

export const getUsers = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_USERS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. gagal dapat data : ", error);
        //gagal get
        dispatch({
          type: GET_USERS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getapi
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. gagal dapat data : ", error);
        //gagal get
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
