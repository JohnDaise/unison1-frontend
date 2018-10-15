import { combineReducers } from "redux";
import rootReducer from "./reducer";

const eventsReducer = (state, action) => {
  switch(action.type){
    case "CREATE_EVENT":
      return



    default:
      return state;

  }



}

const rootReducer = combineReducers({
  searchText: eventsReducer
});


export default rootReducer;
