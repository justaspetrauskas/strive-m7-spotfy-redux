import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import searchSongsReducer from "../reducers/searchSongs";
import favorites from "../reducers/favorites";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 1.
export const initialState = {
  // devide properties into chunks/subobjects
  favorites: {
    favSongs: [],
  },

  searchedSongs: {
    loading: false,
    songsData: [],
    error: "",
    searchQuery: "",
  },
};

const bigReducer = combineReducers({
  favorites: favorites,
  searchedSongs: searchSongsReducer,
});

// 2. - 3 arguments reduces, initial state
const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
