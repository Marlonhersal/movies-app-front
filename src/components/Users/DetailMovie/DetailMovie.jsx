import React from "react";
import { Link } from 'react-router-dom';
import Style from "./DetailMovie.module.scss";

function DetailMovie(props) {
  return (
    <div className={Style.movieDetail_container}>
      <img
        className={Style.c1}
        src={props.poster}
        alt=""
      />
      <div className={Style.c2}>
        <h1>{props.name}</h1>
        <p>{props.duration}</p>
        <p>{props.year}</p>
        <p>{props.country}</p>
        <p>{props.description}</p>
      </div>

      <Link to={`/director/${props.director?.id}`}>
    <div className={`${Style.movie_director} ${Style.c3}`}>
        <img src={props.director?.image} alt="" />
        <div>
        <p>{props.director?.name}</p>
        <p>{props.director?.country}</p>
        </div>
    </div>
        </Link>
        
    <div className={`${Style.movie_actors} ${Style.c4}`}>
      {
        props.actors?.map((actor)=>(
          <div>
            <Link to={`/actor/${actor.id}`}>
              <p>{actor.name}</p>
              <img src={actor.image} alt="" />
            </Link>
        </div>
        ))
      }
    </div>
    </div>
  );
}

export default DetailMovie;
