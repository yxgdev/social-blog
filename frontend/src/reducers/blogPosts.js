import {
  CREATE_POST,
  GET_ALL,
  DELETE_POST,
  UPDATE_POST_VIEWS,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return [...posts, ...action.payload];

    case CREATE_POST:
      return [...posts, action.payload.post];

    case DELETE_POST:
      const id = action.payload;
      return posts.filter((post) => post._id !== id);

    case UPDATE_POST_VIEWS:
      //   const id = action.payload.id;
      const updatedPost = action.payload.updatedPost.data.post;

      return posts.map((post) => {
        console.log(updatedPost);
        console.log(post);
        return post._id === action.payload.id ? updatedPost : post;
      });

    default:
      return posts;
  }
};
