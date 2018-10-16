// action creators
import { ADD_EVENT } from "./types";


export function createEvent(event) {
  return { type: ADD_EVENT, payload: event };
}
