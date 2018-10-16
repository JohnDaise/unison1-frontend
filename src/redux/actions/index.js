const URL = "http://localhost:3001/users";


function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}



function createEvent(event) {
  return { type: "ADD_EVENT", payload: event };
}


function fetchedUsers(users){
  return { type: "FETCHED_USERS", users };
}

function loadingUsers() {
  return { type: "FETCHING_USERS" };
}


function fetchUsers(value) {
  return dispatch => {
     dispatch(loadingUsers());
     fetch(URL)
       .then(res => res.json())
       .then(users => dispatch(fetchedUsers(users)));
   };
}






export { changeSearchText, fetchUsers };
