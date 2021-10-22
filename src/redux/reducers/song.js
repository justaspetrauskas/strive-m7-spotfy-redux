import { GET_SONGS, GET_BOOKS_LOADING} from '../actions'
import { initialState } from '../store'



const songReducer = (state = initialState.currentsong, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        stock: action.payload,
      }
    
  case GET_BOOKS_LOADING:
    return {
      ...state,
      isLoading: action.payload,
    }
  }
}
      export default songReducer