import { initialState } from "../store";

const searchSongsReducer = (state = initialState.searchedSongs, action) => {
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
        songsData: payload,
      };
    case "SEARCH_SONGS_QUERY": {
      return {
        ...state,
        searchQuery: payload,
      };
    }

    default:
      return state;
  }
};
export default searchSongsReducer;
