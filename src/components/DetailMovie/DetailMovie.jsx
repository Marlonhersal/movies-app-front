import React from 'react';

import Style from './DetailMovie.module.scss'

function DetailMovie(props) {
    return (
        <div className={Style.movieDetail_container}>
            <img className= {`${Style.poster} ${Style.c1}`} src={props.Poster} alt="" />
            <div className= {`${Style.movie_info} ${Style.c2}`} >
                <h1>Titulo de la pelicula</h1>
                <p>años</p>
                <p>mexico</p>
            </div>
            <div className= {`${Style.movie_cast} ${Style.c3}`} >
                <p>Ajendrito Director Poyo</p>
                <p>Karina Gidi, Hernán del Riego, Daniel Giménez Cacho</p>
            </div>
        </div>
    );
}

export default DetailMovie;