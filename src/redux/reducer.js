import { combineReducers } from "redux";
import ActionTypes from './actions/ActionTypes';
// import userData from "../users.json";

const initialState = {
  users: [],
  events: [],
  userEvents: [],
  posts: [],
  searchTerm: "",
  dropValue: null,
  modalType: null,
  modalProps: {}
};


const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const dropDownReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_DROP_VALUE":
      return action.value;
    case "ROUTER_CHANGE":
      return {};
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
  switch(action.type){
    case "EVENT_DELETED":
      return state.filter( event => event.id !== action.event.id)
    case "EVENT_UPDATED":
      return state.map(event => {
        if (event.id === action.event.id) {
          return action.event;
        } else {
          return event;
        }
      });
    case "ADD_EVENT":
      return [...state, action.event]
    case "FETCHED_EVENTS":
        return action.events;
    default:
      return state;
  }
}


const userEventsReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_USER_EVENT":
      return [...state, action.ue]
    case "USER_EVENT_CREATED":
      return [...state, action.ue]
    case "USER_EVENT_DELETED":
      return state.filter( ue => ue.id !== action.ue.id)
    case "FETCHED_USER_EVENTS":
        return action.ues;
    default:
      return state;
  }
}


const postsReducer = (state = [], action) => {

  switch(action.type){
    case "POST_DELETED":
      return state.filter( post => post.id !== action.post.id)
    case "ADD_POST":
      return [...state, action.post];
    case "FETCHED_POSTS":
        return action.posts;
    default:
      return state;
  }
}


const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case ActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
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
  modal: modalReducer,
  posts: postsReducer
});


export default rootReducer;
