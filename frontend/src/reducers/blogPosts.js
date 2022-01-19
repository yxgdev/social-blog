import { CREATE_POST, GET_ALL, DELETE_POST } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return [...posts, ...action.payload];

    case CREATE_POST:
      return [...posts, action.payload.post];

    case DELETE_POST:
      const id = action.payload;
      return posts.filter((post) => post._id !== id);
    default:
      return posts;
  }
};
