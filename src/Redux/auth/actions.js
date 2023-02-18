import axios from "axios";
import { LOGIN, SIGNUP } from "./actiontypes";
export const signupRequest = (x) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/users/signup", x);
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
      let res = await axios.post("http://localhost:8080/users/login", x);
      console.log(res.data);
      dispatch({ type: LOGIN, payload: res.data });
      return res.data
    } catch (e) {
      console.log(e);
      return alert("email & password is not matching....!!")
    }
  };
