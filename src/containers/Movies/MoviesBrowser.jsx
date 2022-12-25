import React from 'react';

import Style from './MoviesBrowser.module.scss'

import {Link } from "react-router-dom";

import MovieCard from '../../components/Movie/MovieCard';

//Redux
import { connect } from "react-redux";
import {addMovieFavorite,getMovies} from "../../actions/index";

function MoviesBrowser(props) {
    return (
        <section className={Style.main_container}>
        <div className={Style.cards_container}>
         {
          props.movies?
          props.movies.map((movie) =>{
            return <MovieCard key={movie.imdbID} Id ={movie.imdbID} Poster= {movie.Poster}  Title={movie.Title} Year={movie.Year} />
        }):
        <h1>No se encontraron resultados</h1>
        }
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