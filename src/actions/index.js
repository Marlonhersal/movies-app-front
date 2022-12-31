
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}
export function addItemLoaded(element, id, token) {
    return function(dispatch) {
    return fetch(`http://localhost:3000/${element}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  token
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch({ type: "ADD_ITEM_LOADED", payload : response});
      });
  };
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1fb7905f&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}
export function getItems(entidad, token) {
    return function(dispatch) {
      return fetch(`http://localhost:3000/${entidad}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " +  token
        },
    })
    .then((response) => response.json())
    .then((response) => {
      dispatch({type: "GET_ITEMS", payload: response})
    } )
    };
}

export function removeMovieFavorite(payload){
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: payload
    }
}


export function getMovieDetail(idMovie){
    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?i=${idMovie}&apikey=1fb7905f`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
          });
      };
}
