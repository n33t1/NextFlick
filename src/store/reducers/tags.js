import {
    SELECT_TAGS,
    SET_TAGS,
    UPDATE_TAGS
  } from "../actions/actionTypes";

  const initialState = {
    tags: [],
    res: {}
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_TAGS:
        return {
          ...state,
          tags: state.tags.filter(tag => {
            return tag.key !== action.tagKey;
          })
        };
      case SET_TAGS: 
        console.log("reducer: " + JSON.stringify(action.tags));
        return {
          ...state,
          tags: action.tags
        };
      case UPDATE_TAGS: 
        console.log("UPDATE_TAGS: " + JSON.stringify(action.tags));
        console.log("UPDATE_TAGS: " + JSON.stringify(state.res));
        return {
          ...state,
          res: Object.assign(state.res, action.tags)
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  