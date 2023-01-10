import React, { useEffect } from 'react';
import NavBar from '../../../components/Users/NavBar/NavBar';
import DetailMovie from '../../../components/Users/DetailMovie/DetailMovie';


import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Redux
import {getMovieDetail} from "../../../actions/index";

function  MovieDetail(props) {
    const token = localStorage.getItem('Token')
    const despachador = useDispatch()
    let { movieId } =  useParams();
    useEffect(()=>{
        despachador(getMovieDetail(movieId,token))
        
    },[])
    const movieDetail = useSelector(state => state.movieDetail)
    return (
        <div>
            <NavBar/>
            <DetailMovie {...movieDetail}/>
        </div>
    );
}

export default (MovieDetail);