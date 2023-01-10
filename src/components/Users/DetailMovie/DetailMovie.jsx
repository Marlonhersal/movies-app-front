import React from "react";

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

    <div className={`${Style.movie_director} ${Style.c3}`}>
        <img src={props.director?.image} alt="" />
        <div>
        <p>{props.director?.name}</p>
        <p>{props.director?.country}</p>
        </div>
    </div>
    <div className={Style.c4}>
        <div>
            <p>Marlon Hernandez</p>
            <p>Contrase</p>
        </div>
        <div>
            <p>Marlon Hernandez</p>
            <p>Contrase</p>
        </div>
        <div>
            <p>Marlon Hernandez</p>
            <p>Contrase</p>
        </div>
    </div>
    </div>
  );
}

export default DetailMovie;
