import React from 'react';
import Style from  './DetailActor.module.scss'
import { Link } from 'react-router-dom';

function DetailDirector(props) {
    return (
        <div className={Style.movieDetail_container}>
      <img
        className={Style.c1}
        src={props.image}
        alt=""
      />
      <div className={Style.c2}>
        <h1>{props.name}</h1>
        <h1> {props.age}</h1>
        <p>{props.country}</p>
        <p>{props.description}</p>
      </div>

    <div className={`${Style.movie_actors} ${Style.c4}`}>
      {
        props.movies?.map((movie)=>(
        <div>
            <p>{movie.name}</p>
            <img src={movie.poster} alt="" />
        </div>
        ))
      }
    </div>
    </div>
    );
}

export default DetailDirector;