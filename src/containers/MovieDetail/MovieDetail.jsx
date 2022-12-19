import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DetailMovie from '../../components/DetailMovie/DetailMovie';

import {useDispatch, useSelector,connect } from 'react-redux';
import { useParams } from 'react-router-dom';

//Redux
import {getMovieDetail} from "../../actions/index";

function  MovieDetail(props) {
    const despachador = useDispatch()
    let { movieId } =  useParams();
    despachador(getMovieDetail(movieId))
    const movieDetail = useSelector(state => state.movieDetail)
    
    return (
        <div>
            <NavBar/>
            <DetailMovie Poster={movieDetail.Poster} Title={movieDetail.Title} Year={movieDetail.Year} Country= {movieDetail.Country} Director= {movieDetail.Director}  Actors= {movieDetail.Actors}/>
        </div>
    );
}

export default (MovieDetail);