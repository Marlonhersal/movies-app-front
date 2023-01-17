const initialState = {
  moviesFavourites: [],
  Loaded: [],
  Detail: {},
  items: [],
  itemLoaded: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_OBJECTS":
      return {
        ...state,
        Loaded: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        Detail: action.payload,
      };
    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (nombre) => nombre != action.payload
        ),
      };
    case "ADD_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload),
      };
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_ITEM_LOADED":
      return {
        ...state,
        itemLoaded: action.payload,
      };
    default:
      break;
  }
  return state;
}

export default rootReducer;
