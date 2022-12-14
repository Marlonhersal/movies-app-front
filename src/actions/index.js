import { joinPaths } from '@remix-run/router';

const {config}= require('../../config/config')

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}
export function addItemLoaded(element, id, token) {
    return function(dispatch) {
    return fetch(`${config.apiUrl}/${element}/${id}`, {
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

export function getAllMovies(token) {
  return function(dispatch) {
    return fetch(config.apiUrl + "/movies",
      {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  token
      }})
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_ALL_MOVIES", payload: json });
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
      return fetch(`${config.apiUrl}/${entidad}/`, {
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


export function getMovieDetail(idMovie, token){
    return function(dispatch) {
        return fetch(`${config.apiUrl}/movies/${idMovie}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " +  token
          },
      })
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
          });
      };
}
