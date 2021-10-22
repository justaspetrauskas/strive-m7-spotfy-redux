
        
  componentDidMount = async () => {
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

    if (resp.ok){
        const {data } = await resp.json();
        dispatch({
            type: "FETCH_SONGS",
            payload: data,
        });

    } else {
        console.log("error");
    }
}
