import React from 'react';
import { useDispatch } from 'react-redux';


/* // Import our custom CSS
import '../../styles/bootstrap.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
 */
import {addMovieFavorite,getMovies} from "../../actions/index";

function SearchBar(props) {
    const despachador = useDispatch()
    const [state, setState] = React.useState(
        {
            title: ""
        }
    )
    function handleChange(event) {
        setState({title: event.target.value });
      }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(state)
        despachador(getMovies(state.title))
      }
    return (
        <form className="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={state.title}
              onChange={(e) => handleChange(e)}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
    );
}

export default SearchBar;