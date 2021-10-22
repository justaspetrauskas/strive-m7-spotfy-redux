import { initialState } from "../store";

export default function searchSongsReducer(
  state = initialState.searchedSongs,
  action
) {
  console.log(action, state);

  const { type, payload } = action;
  switch (type) {
    case "SEARCH_SONGS_REQUEST":
      return {
        ...state,
        loading: payload,
      };
    case "SEARCH_SONGS_FAILURE":
      return {
        ...state,
        error: payload,
      };
    case "SEARCH_SONGS_SUCCESS":
      return {
        ...state,
        songData: payload,
      };
    default:
      return state;
  }
}
