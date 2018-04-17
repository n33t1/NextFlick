import {
    SET_QUERY_RES
} from "../actions/actionTypes";

  const initialState = {
    searchRes: [],
    keyword: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_QUERY_RES: 
        console.log("searchRes: " + JSON.stringify(action.searchRes));
        return {
        ...state,
        searchRes: action.searchRes
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  