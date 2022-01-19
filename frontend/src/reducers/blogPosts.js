import { GET_ALL } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return [...posts, ...action.payload];

    default:
      return posts;
  }
};
