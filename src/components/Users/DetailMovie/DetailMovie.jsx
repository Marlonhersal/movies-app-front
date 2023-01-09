import React from 'react';

import Style from './DetailMovie.module.scss'

function DetailMovie(props) {
    return (
        <div className={Style.movieDetail_container}>
            <img className= {`${Style.poster} ${Style.c1}`} src={props.Poster} alt="" />
            <div className= {`${Style.movie_info} ${Style.c2}`} >
                <h1>{props.Title}</h1>
                <p>{props.Year}</p>
                <p>{props.Country}</p>
            </div>
            <div className= {`${Style.movie_cast} ${Style.c3}`} >
                <p>{props.Director}</p>
                <p>{props.Actors}</p>
            </div>
        </div>
    );
}

export default DetailMovie;