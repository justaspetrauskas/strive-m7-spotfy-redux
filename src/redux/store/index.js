import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// this file contains 2 thinngs:
// 11.the initial state of application
// 2. the configureStore execution

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  song: {
      elements: [],
  },
  likedSong:{
      elements:[]
  },
  };
  
  const bigReducer = combineReducers ({
      song : songReducer,
      likedSong: likedSongReducer,
  
  })
  

// 2. - 3 arguments reduces, initial state
const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
