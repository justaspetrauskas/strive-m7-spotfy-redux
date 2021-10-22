export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addSongToFav = (song) => ({
  type: "ADD_TO_FAVORITES",
  payload: song,
});

export const removeSongFromFav = (song) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: song,
});
