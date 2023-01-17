import React from 'react';
import { Link } from 'react-router-dom';
import Style from './PersonCard.module.scss'

function MovieCard(props) {
    return (
        <Link to={`/${props.entidad}/${props.id}`}>
            <div className={Style.movie_card}>
                    <img src={props.image} alt="" className="movie-img"/>
                    <div className={Style.movie_info}>
                        <p>{props.name}</p>
                        <p>{props.country}</p>
                    </div>
            </div> 
        </Link>
    );
}

export default MovieCard;