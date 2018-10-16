function createEvent(event) {
  return { type: "ADD_EVENT", payload: event };
}


function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}


export { changeSearchText };
