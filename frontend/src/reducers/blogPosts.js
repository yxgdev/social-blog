import { CREATE_POST, GET_ALL } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return [...posts, ...action.payload];

    case CREATE_POST:
      return [...posts, action.payload.post];

    default:
      return posts;
  }
};
