import React, { useEffect } from 'react';

import Style from './MoviesBrowser.module.scss'
import { useDispatch } from 'react-redux';

import {Link } from "react-router-dom";

import MovieCard from '../../../components/Users/MovieCard/MovieCard';

//Redux
import { connect } from "react-redux";
import {getAllMovies} from "../../../actions/index";

function MoviesBrowser(props) {
    const token = localStorage.getItem('Token');
    const despachador = useDispatch()
    useEffect(() => {
        despachador(getAllMovies(token))
      }, []);
    return (
        <section className={Style.main_container}>
        <div className={Style.cards_container}>
         {
          props.movies?
          props.movies.map((movie) =>{
            return <MovieCard {...movie}  />
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