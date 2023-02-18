import { DELETE_FILE, FILE_UPLOAD, GET_FILES, SEARCH_FILE } from "./actiontypes";
import axios from "axios";
export const uploadFile = (docs) => async (dispatch) => {
  try {
    console.log(docs);
    let res = await axios.post("https://backend-side-91mobiles.onrender.com/upload", docs, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: FILE_UPLOAD, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};
export const getFile = () => async (dispatch) => {
    
        try {
            const { data } = await axios.get(`https://backend-side-91mobiles.onrender.com/allfiles`);
            // setErrorMsg(""); 
            dispatch({ type: GET_FILES, payload: data })
          } catch (e) {
        console.log('e',e);
          
        }
  };

export const searchFile = (x) => async (dispatch) => {
  console.log(x);
  dispatch({ type: SEARCH_FILE, payload: x });
};
export const deleteFile = (x) => async (dispatch) => {
  console.log(x);
  dispatch({ type: DELETE_FILE, payload: x });
};
