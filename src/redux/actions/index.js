// action creators
import { CREATE_EVENT } from "./types";


export function createEvent(event) {
  return { type: CREATE_EVENT, payload: event };
}
