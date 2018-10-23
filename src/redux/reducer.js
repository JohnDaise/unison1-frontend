import { combineReducers } from "redux";
// import userData from "../users.json";

const initialState = {
  users: [],
  events: [],
  userEvents: [],
  posts: [],
  searchTerm: "",
  dropValue: null
};


const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const dropDownReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_DROP_VALUE":
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
    case "FETCHING_EVENTS":
      return true;
      case "FETCHED_USERS":
      return false;
    case "FETCHED_EVENTS":
      return false;
    default:
      return state;
  }
};

//to create  add dispatch in action mapDispatchToProps
const eventsReducer = (state = [], action) => {
  let newEvents = []
  switch(action.type){
    case "ADD_EVENT":
      return newEvents = [...state, action.event]
    case "FETCHED_EVENTS":
        return action.events;
    default:
      return state;
  }
}


const userEventsReducer = (state = [], action) => {
  let newUserEvents = []
  switch(action.type){
    case "ADD_USER_EVENT":
      return newUserEvents = [...state, action.ue]
    case "FETCHED_USER_EVENTS":
        return action.ues;
    default:
      return state;
  }
}


const postsReducer = (state = [], action) => {
  let newPosts = []
  switch(action.type){
    case "ADD_POST":
      return newPosts = [...state, action.post]
    case "FETCHED_POSTS":
        return action.posts;
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
  dropValue: dropDownReducer,
  users: usersReducer,
  currentUser: loginReducer,
  events: eventsReducer,
  userEvents: userEventsReducer,
  loading: loadingReducer,
  posts: postsReducer
});


export default rootReducer;
