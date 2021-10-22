
export const GET_SONGS = 'GET_SONGS'
export const GET_SONGS_LOADING = 'GET_SONGS_LOADING'


export const getBooksAction = () => {
componentDidMount = async () => {
    return async (dispatch, getState) => {
        console.log('...fetching the books')
        dispatch({
          type: GET_SONGS_LOADING,
          payload: true,
        })
    let artistId = this.props.match.params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );
      if (resp.ok) {
        let data = await resp.json()
      
        dispatch({
          type: GET_SONGS,
          payload: data,
        })
        dispatch({
            type: GET_SONGS_LOADING,
            payload: false,
          })
    }
}