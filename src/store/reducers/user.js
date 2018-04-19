import { SET_USER_INFO } from "../actions/actionTypes";

const initialState = {
    userName: "",
    userId: ""
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_INFO:
        return {
          ...state,
          userID: action.userID,
          userName: action.userName
        };
      default:
        return state;
    }
  };
  
  export default reducer;