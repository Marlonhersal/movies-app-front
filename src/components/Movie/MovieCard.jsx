import React from 'react';
import { Link } from 'react-router-dom';
import Style from './MovieCard.module.scss'

function MovieCard(props) {
    return (
        <div className={Style.product_card}>
                <img src={props.Poster} alt="" className="product-img"/>
                <div className={Style.product_info}>
                    <Link to={`/movie/${props.Id}`}>{props.Title}</Link>
                    <p>{props.Year}</p>
                </div>
        </div> 
    );
}

export default MovieCard;