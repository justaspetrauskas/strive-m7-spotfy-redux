import { initialState } from "../store/index";

export default function favouriteSongsReducer(
  state = initialState.favorites,
  action
) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favSongs: [...state.favSongs, payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favSongs: state.favSongs.filter((company) => company !== payload),
      };
    default:
      return state;
  }
}
