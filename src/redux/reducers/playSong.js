import { initialState } from "../store/index";

export default function playSongReducer(
  state = initialState.player,
  action
) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "PLAY_SONG":
      return {
        ...state,
        currentSong: payload,
      };
    default:
      return state;
  }
}
