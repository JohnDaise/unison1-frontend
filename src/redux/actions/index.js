const usersURL = "http://localhost:3001/users";
const eventsURL = "http://localhost:3001/events";


function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
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
  return { type: "ADD_EVENT", payload: event };
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









export { changeSearchText, fetchUsers, fetchEvents };
