import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import searchSongsReducer from "../reducers/searchSongs";
import favorites from "../reducers/favorites";
// this file contains 2 thinngs:
// 11.the initial state of application
// 2. the configureStore execution

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 1.
export const initialState = {
  // devide properties into chunks/subobjects
  favorites: {
    favSongs: [],
  },

  searchedSongs: {
    loading: false,
    songData: [],
    error: "",
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
