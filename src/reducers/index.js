import { combineReducers } from "redux";
import PostsReducer from "./posts";
import UsersReducer from "./users";
import PhotosReducer from "./photos";

export default combineReducers({
  PostsReducer,
  UsersReducer,
  PhotosReducer,
});
