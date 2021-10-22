
import { initialState } from "../store";

export default function jobsReducer(state = initialState.currentsong, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "FETCH_SONGS":
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}