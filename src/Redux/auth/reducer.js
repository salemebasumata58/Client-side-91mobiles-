import { LOGIN, SIGNUP } from "./actiontypes";

const initState = {
  users: [],
  isAuth: false,
  token: "",
  isSigned: false,
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP: {
      return {
        ...state,
        isSigned: true,
      };
    }
    case LOGIN: {
        return {
          ...state,
          isAuth: true,
          token:payload.token,
          users:payload.user 
        };
      }
    default: {
      return state;
    }
  }
};
