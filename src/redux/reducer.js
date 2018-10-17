import { combineReducers } from "redux";
// import userData from "../users.json";

const initialState = {
  users: [],
  currentUser: null,
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

//to create  add dispatch in action mapDispatchToProps
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



///do this reducer
//to login a user dispatch here mapDispatchToProps
// hold current user info  mapStateToProps
//boolean if user is logged in mapStateToProps
const loginReducer = (state = null, action) => {
  switch(action.type){
    case "SET_USER:":
      return action.currentUser
    case "FORGET_USER":
        return null;
    default:
      return state;
    }
}




const rootReducer = combineReducers({
  searchTerm: searchTextReducer,
  users: usersReducer,
  currentUser: loginReducer,
  events: eventsReducer,
  loading: loadingReducer
});


export default rootReducer;
