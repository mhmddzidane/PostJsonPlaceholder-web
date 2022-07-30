import { GET_USERS, GET_USERS_DETAIL } from "../../action/getUsersAction";

const initialState = {
  getUserResult: false,
  getUserLoading: false,
  getUserError: false,

  getUserDetailResult: false,
  getUserDetailLoading: false,
  getUserDetailError: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        getUserResult: action.payload.data,
        getUserLoading: action.payload.loading,
        getUserError: action.payload.errorMessage,
      };
    case GET_USERS_DETAIL:
      return {
        ...state,
        getUserDetailResult: action.payload.data,
        getUserDetailLoading: action.payload.loading,
        getUserDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
