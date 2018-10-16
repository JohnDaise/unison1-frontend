import { combineReducers } from "redux";
import userData from "../users.json";

const initialState = {
  users: userData.users,
  currentUser: {},
  events: [],
  searchTerm: ""
};

const eventsReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_EVENT":
      return state.concat([action.payload]);
    default:
      return state;
  }
}

const userReducer = (state = userData.users, action) => {
  switch(action.type){
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
