import * as api from "../api";
import { CREATE_POST, GET_ALL } from "../constants/actionTypes";

export const getBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);
  console.log(data);
  dispatch({ type: CREATE_POST, payload: data });
};
