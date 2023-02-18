import { DELETE_FILE, FILE_UPLOAD, SEARCH_FILE } from "./actiontypes";

const initState = {
  files: [],
  searchData:[]
};
export const fileReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FILE_UPLOAD: {
      return {
        ...state,
        files: [...state.files, payload],
      };
    }
    case SEARCH_FILE: {
      return {
        ...state,
        files: payload,
      };
    }
    case SEARCH_FILE: {
      let data = state.files.filter((el)=>{
        return el.name === payload+".pdf" ||  payload+".excel" ||  payload+".csv"
      })
      return {
        ...state,
        files: ""
      };
    }
    case DELETE_FILE: {
        console.log('payload', payload);
        
      let data = state.files.filter((el) => {
        return el.name != payload.name
      });
      console.log(data);
      return {
        ...state,
        files: data,
      };
    }
    default: {
      return state;
    }
  }
};
