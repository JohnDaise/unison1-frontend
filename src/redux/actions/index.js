import ActionTypes from './ActionTypes';

const usersURL = "http://localhost:3001/users";
const eventsURL = "http://localhost:3001/events";
const userEventsURL = "http://localhost:3001/user_events";
const postsURL = "http://localhost:3001/posts"
// const loginURL = "http://localhost:3001/profile"



export function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

export function changeDropValue(value) {
  return { type: "CHANGE_DROP_VALUE", value: value}
}



export function changeRouter(change){
  return {type: "ROUTER_CHANGE", change}
};



///User Actions

export function fetchedUsers(users){
  return { type: "FETCHED_USERS", users };
}

export function loadingUsers() {
  return { type: "FETCHING_USERS" };
}


export function fetchUsers(value) {
  return dispatch => {
     dispatch(loadingUsers());
     fetch(usersURL)
       .then(res => res.json())
       .then(users => dispatch(fetchedUsers(users)));
   };
}




///Event Actions

export function createEvent(event) {
  return { type: "ADD_EVENT", event };
}


export function eventUpdated(event) {
  return { type: "EVENT_UPDATED", event };
}


export function updateEvent({ payload, eventId }) {
  return function(dispatch, getState) {
    // const organizer = getState().events.find(event => event.id === eventId).user;
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


export function eventDeleted(event) {
  return {
    type: "EVENT_DELETED", event
  };
}

export function deleteEvent(eventId) {
  return function(dispatch, getState) {
    fetch(`${eventsURL}/${eventId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( json => dispatch(eventDeleted(json)));
  };
}


export function fetchedEvents(events){
  return { type: "FETCHED_EVENTS", events };
}

export function loadingEvents() {
  return { type: "FETCHING_EVENTS" };
}


export function fetchEvents(value) {
  return dispatch => {
     dispatch(loadingEvents());
     fetch(eventsURL)
       .then(res => res.json())
       .then(events => dispatch(fetchedEvents(events)));
   };
}


///UserEvent Actions

export function createUserEvent(ue) {
  return { type: "ADD_USER_EVENT", ue };
}

export function fetchedUserEvents(ues){
  return { type: "FETCHED_USER_EVENTS", ues };
}

export function loadingUserEvents() {
  return { type: "FETCHING_USER_EVENTS" };
}


export function fetchUserEvents(value) {
  return dispatch => {
     dispatch(loadingUserEvents());
     fetch(userEventsURL)
       .then(res => res.json())
       .then(ues => dispatch(fetchedUserEvents(ues)));
   };
}

export function addPlayerToEvent({ payload }){
  return function(dispatch, getState){
  let data = {
    eventId: payload.eventId,
    playerId: payload.playerId,
    dropValue: payload.dropValue,
    event: payload.event
  };
  console.log(data)
    fetch(`http://localhost:3001/user_events/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
          },
      body: JSON.stringify({
          user_id: data.playerId,
          event_id: data.eventId
      })
        })
        .then(r => r.json())
        .then(ue => dispatch(createUserEvent(ue)))
        // this.props.fetchEvents();
        window.alert("Player Added")
    };
  };

export function createdUserEvent(ue) {
  return {
    type: "USER_EVENT_CREATED", ue
  };
}





export function userEventDeleted(ue) {
  return {
    type: "USER_EVENT_DELETED", ue
  };
}

export function deleteUserEvent(ueId) {
  return function(dispatch, getState) {
    fetch(`${userEventsURL}/${ueId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( json => dispatch(userEventDeleted(json)));
  };
}




//Post Actions

export function createPost(post) {
  return { type: "ADD_POST", post };
}

export function fetchedPosts(posts){
  return { type: "FETCHED_POSTS", posts };
}

export function loadingPosts() {
  return { type: "FETCHING_POSTS" };
}

export function postDeleted(post) {
  return {
    type: "POST_DELETED", post
  };
}


export function fetchPosts(value) {
  return dispatch => {
     dispatch(loadingPosts());
     fetch(postsURL)
       .then(res => res.json())
       .then(posts => dispatch(fetchedPosts(posts)));
   };
}



export function deletePost(postId) {
  return function(dispatch, getState) {
    fetch(`${postsURL}/${postId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( json => dispatch(postDeleted(json)));
  };
}

// Modal Actions


export function showModal ({ modalProps, modalType }) {
  return dispatch => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  });
}
}

export function hideModal () {
  return dispatch => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  });
}
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
// function login(email, password){
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


// export { changeSearchText, changeDropValue, resetDropValue, fetchUsers, fetchEvents, fetchUserEvents, fetchedEvents, fetchedUserEvents, createEvent, createUserEvent, createPost, fetchPosts, fetchedPosts, loadingPosts, updateEvent, eventUpdated, deleteEvent, loadingEvents, eventDeleted, deletePost, postDeleted };
