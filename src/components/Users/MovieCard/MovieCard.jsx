import React from 'react';
import { Link } from 'react-router-dom';
import Style from './MovieCard.module.scss'

function MovieCard(props) {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className={Style.movie_card}>
                    <img src={props.poster} alt="" className="movie-img"/>
                    <div className={Style.movie_info}>
                        <p>{props.name}</p>
                        <p>{props.year}</p>
                    </div>
            </div> 
        </Link>
    );
}

export default MovieCard;