import { SET_USER_INFO, SET_USER_ID } from "../actions/actionTypes";

const initialState = {
    userName: "",
    userID: "",
    password: ""
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_INFO:
        return {
          ...state,
          userName: action.userName,
          password: action.password
        };
      case SET_USER_ID:
        return {
          ...state,
          userID: action.userID
        };
      default:
        return state;
    }
  };
  
  export default reducer;