const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    items: [],
    itemLoaded: {}
  };

  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_FAVORITE":
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(nombre => nombre != action.payload) 
            }
        case "GET_MOVIES_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload
            }
        case "ADD_ITEM_LOADED":
            return {
                ...state,
                itemLoaded: action.payload
            }
        default:
            break;
    }
    return state;
    }
  
  export default rootReducer;