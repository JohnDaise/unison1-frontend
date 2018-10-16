import { combineReducers } from "redux";
// import userData from "../users.json";

const initialState = {
  users: [],
  currentUser: {},
  events: [],
  searchTerm: ""
};


const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch(action.type){
    case "FETCHED_USERS":
        return action.users;
    default:
      return state;
  }
}


const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCHING_USERS":
      return true;
    case "FETCHED_USERS":
      return false;
    case "FETCHING_EVENTS":
      return true;
    case "FETCHED_EVENTS":
      return false;
    default:
      return state;
  }
};


const eventsReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_EVENT":
      return state.concat([action.payload]);
    case "FETCHED_EVENTS":
        return action.events;
    default:
      return state;
  }
}




const rootReducer = combineReducers({
  searchTerm: searchTextReducer,
  users: usersReducer,
  events: eventsReducer,
  loading: loadingReducer
});


export default rootReducer;
