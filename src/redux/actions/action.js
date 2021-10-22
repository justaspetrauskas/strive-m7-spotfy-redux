
export const GET_SONGS = 'GET_SONGS',
// export const GET_SONGS_LOADING = 'GET_SONGS_LOADING',



export const songs = (url,id) => {
    return async (dispatch) => {
        console.log('...fetching songs')
    try {
      let response = await fetch( url + id);
      if (resp.ok) {
        let {data} = await resp.json()    
        dispatch({
          type: GET_SONGS,
          payload: data,
        })
      }else{
console.log("something bad happended")
      }
    }catch(err){
        console.log(err)
    }
    };
};