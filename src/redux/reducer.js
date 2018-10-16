import { combineReducers } from "redux";


const eventsReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_EVENT":
      return state.concat([action.payload]);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  events: eventsReducer
});


export default rootReducer;
