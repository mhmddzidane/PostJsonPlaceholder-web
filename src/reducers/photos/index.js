import { GET_PHOTOS, GET_PHOTOS_DETAIL } from "../../action/getPhotoAction";

const initialState = {
  getPhotoResult: false,
  getPhotoLoading: false,
  getPhotoError: false,

  getPhotoDetailResult: false,
  getPhotoDetailLoading: false,
  getPhotoDetailError: false,
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        getPhotoResult: action.payload.data,
        getPhotoLoading: action.payload.loading,
        getPhotoError: action.payload.errorMessage,
      };
    case GET_PHOTOS_DETAIL:
      return {
        ...state,
        getPhotoDetailResult: action.payload.data,
        getPhotoDetailLoading: action.payload.loading,
        getPhotoDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default photos;
