const usersURL = "http://localhost:3001/users";
const eventsURL = "http://localhost:3001/events";
const userEventsURL = "http://localhost:3001/user_events";
const postsURL = "http://localhost:3001/posts"
const loginURL = "http://localhost:3001/profile"


function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function changeDropValue(value) {
  return { type: "CHANGE_DROP_VALUE", value: value}
}

///User Actions

function fetchedUsers(users){
  return { type: "FETCHED_USERS", users };
}

function loadingUsers() {
  return { type: "FETCHING_USERS" };
}


function fetchUsers(value) {
  return dispatch => {
     dispatch(loadingUsers());
     fetch(usersURL)
       .then(res => res.json())
       .then(users => dispatch(fetchedUsers(users)));
   };
}




///Event Actions

function createEvent(event) {
  return { type: "ADD_EVENT", event };
}


function eventUpdated(event) {
  return { type: "EVENT_UPDATED", event };
}


function updateEvent({ payload, eventId }) {
  return function(dispatch, getState) {
    const organizer = getState().events.find(event => event.id === eventId).user;
    let data = {
      name: payload.name,
      location: payload.location,
      datetime: payload.startDate,
      notes: payload.notes
    };
    fetch(`${eventsURL}/${eventId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(event => dispatch(eventUpdated(event)));
  };
};


function eventDeleted(event) {
  return {
    type: "EVENT_DELETED", event
  };
}

function deleteEvent(eventId) {
  return function(dispatch, getState) {
    fetch(`${eventsURL}/${eventId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( json => dispatch(eventDeleted(json)));
  };
}


function fetchedEvents(events){
  return { type: "FETCHED_EVENTS", events };
}

function loadingEvents() {
  return { type: "FETCHING_EVENTS" };
}


function fetchEvents(value) {
  return dispatch => {
     dispatch(loadingEvents());
     fetch(eventsURL)
       .then(res => res.json())
       .then(events => dispatch(fetchedEvents(events)));
   };
}


///UserEvent Actions

function createUserEvent(ue) {
  return { type: "ADD_USER_EVENT", ue };
}

function fetchedUserEvents(ues){
  return { type: "FETCHED_USER_EVENTS", ues };
}

function loadingUserEvents() {
  return { type: "FETCHING_USER_EVENTS" };
}


function fetchUserEvents(value) {
  return dispatch => {
     dispatch(loadingUserEvents());
     fetch(userEventsURL)
       .then(res => res.json())
       .then(ues => dispatch(fetchedUserEvents(ues)));
   };
}



//Post Actions

function createPost(post) {
  return { type: "ADD_POST", post };
}

function fetchedPosts(posts){
  return { type: "FETCHED_POSTS", posts };
}

function loadingPosts() {
  return { type: "FETCHING_POSTS" };
}

function postDeleted(post) {
  return {
    type: "POST_DELETED", post
  };
}


function fetchPosts(value) {
  return dispatch => {
     dispatch(loadingPosts());
     fetch(postsURL)
       .then(res => res.json())
       .then(posts => dispatch(fetchedPosts(posts)));
   };
}



function deletePost(postId) {
  return function(dispatch, getState) {
    fetch(`${postsURL}/${postId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( json => dispatch(postDeleted(json)));
  };
}







///Login Actions
// function setCurrentUser(currentUser){
//   return { type: "SET_USER", currentUser };
// }
//
// function logOutCurrentUser(currentUser){
//   return { type: "FORGET_USER" };
// }
//
//
// function getCurrentUser(){
//     return function(dispatch, getState){
//         fetch(loginURL, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }).then(res => {
//           if (res.status === 401) {
//             dispatch(alert("login failed"));// dispatch
//           } else {
//             return res.json(); //getState
//           }
//         }).then(currentUser => dispatch(setCurrentUser(currentUser)));
//     }
//   }
//





//mapDispatchToProps to currentUser is in app and


//dispatch fetchUser function to app


///dispatch function to App








// , getCurrentUser, setCurrentUser, logOutCurrentUser


export { changeSearchText, changeDropValue, fetchUsers, fetchEvents, fetchUserEvents, fetchedEvents, fetchedUserEvents, createEvent, createPost, fetchPosts, fetchedPosts, loadingPosts, updateEvent, eventUpdated, deleteEvent, loadingEvents, eventDeleted, deletePost, postDeleted };
