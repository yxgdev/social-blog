import { AUTH, SIGN_OUT } from "../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };

    case SIGN_OUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
