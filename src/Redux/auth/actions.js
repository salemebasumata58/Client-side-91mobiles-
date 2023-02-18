import axios from "axios";
import { LOGIN, SIGNUP } from "./actiontypes";
export const signupRequest = (x) => async (dispatch) => {
  try {
    let res = await axios.post("https://backend-side-91mobiles.onrender.com/users/signup", x);
    console.log(res.data);
    dispatch({ type: SIGNUP, payload: res.data });
    return res.data
  } catch (e) {
    console.log(e);
    return alert("Bad request")
  }
};

export const loginRequest = (x) => async (dispatch) => {
    try {
      let res = await axios.post("https://backend-side-91mobiles.onrender.com/users/login", x);
      console.log(res.data);
      dispatch({ type: LOGIN, payload: res.data });
      return res.data
    } catch (e) {
      console.log(e);
      return alert("email & password is not matching....!!")
    }
  };
