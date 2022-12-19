import React from 'react';
import './MoviesBrowser.scss'

import {Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import {addMovieFavorite,getMovies} from "../../actions/index";

function MoviesBrowser(props) {
    return (
        <section className="main-continer">
        <div className="cards-container">
            
        <ul>
         {
          props.movies?
          props.movies.map((movie) =>{
           return <li key={movie.imdbID}><Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link><button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button> </li>
          }):
          <li>No se encontraron resultados</li>
         }
        </ul>

            {/* <div className="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="product-img"/>
                <div className="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div> 
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                    </figure>
                </div>
            </div>  */}
        </div>
    </section>
    );
}

function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded
    };
  }


export default connect(mapStateToProps)(MoviesBrowser);