import { combineReducers } from "redux";
import blogPosts from "../reducers/blogPosts";
import singlePost from "./singlePost";
export default combineReducers({
  blogPosts,
  singlePost,
});
