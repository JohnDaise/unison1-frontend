const usersURL = "http://localhost:3001/users";
const eventsURL = "http://localhost:3001/events";
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


function fetchPosts(value) {
  return dispatch => {
     dispatch(loadingPosts());
     fetch(postsURL)
       .then(res => res.json())
       .then(posts => dispatch(fetchedPosts(posts)));
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


export { changeSearchText, changeDropValue, fetchUsers, fetchEvents, fetchedEvents, createEvent, createPost, fetchPosts, fetchedPosts, loadingPosts };
