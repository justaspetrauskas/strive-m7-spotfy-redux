export const SEARCH_SONGS_REQUEST = "SEARCH_SONGS_REQUEST";
export const SEARCH_SONGS_SUCCESS = "SEARCH_SONGS_SUCCESS";
export const SEARCH_SONGS_FAILURE = "SEARCH_SONGS_FAILURE";
export const SEARCH_SONGS_QUERY = "SEARCH_SONGS_QUERY";
// const searchSongsRequest = (state) => {
//   return {
//     type: "SEARCH_SONGS_REQUEST",
//     payload: state,
//   };
// };

const searchSongsSuccess = (data) => {
  console.log(data);
  return {
    type: SEARCH_SONGS_SUCCESS,
    payload: data,
  };
};

const setSearchQuery = (query) => {
  return {
    type: SEARCH_SONGS_QUERY,
    payload: query,
  };
};

const searchSongsFailure = (state) => {
  return {
    type: SEARCH_SONGS_FAILURE,
    payload: state,
  };
};

export const searchSongs = (url, query) => {
  return async (dispatch) => {
    console.log("searching for songs..." + query);
    dispatch(setSearchQuery(query.toLowerCase()));
    try {
      let resp = await fetch(url + query);
      if (resp.ok) {
        const { data } = await resp.json();
        console.log(data);
        dispatch(searchSongsSuccess(data));
        dispatch(searchSongsFailure(false));
        // dispatch(searchSongsRequest(false));
      } else {
        console.log("error");
        dispatch(searchSongsFailure(true));
        // dispatch(searchSongsRequest(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(searchSongsFailure(true));
      // dispatch(searchSongsRequest(false));
    }
  };
};
