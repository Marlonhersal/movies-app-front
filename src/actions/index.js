import { joinPaths } from '@remix-run/router';

const {config}= require('../../config/config')




export function getAllObjects(entidadad, token) {
  return function(dispatch) {
    return fetch(config.apiUrl + "/" + entidadad,
      {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  token
      }})
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_ALL_OBJECTS", payload: json });
      });
  };
}
export function getDetail(id, entidad , token){
  return function(dispatch) {
      return fetch(`${config.apiUrl}/${entidad}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " +  token
        },
    })
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DETAIL", payload: json });
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
}
}

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(payload){
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: payload
    }
}

