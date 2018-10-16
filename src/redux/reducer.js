import { combineReducers } from "redux";


const initialState = {
  users: [],
  events: [],
  searchTerm: ""
}

const eventsReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_EVENT":
      return state.concat([action.payload]);
    case "CHANGE_SEARCH_TEXT":
        return action.value;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  events: eventsReducer
});


export default rootReducer;
