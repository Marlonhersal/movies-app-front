import React, { useEffect } from "react";

import Style from "./MoviesBrowser.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { getAllObjects } from "../../../actions/index";
import MovieCard from "../../../components/Users/MovieCard/MovieCard";

function MoviesBrowser(props) {
  const token = localStorage.getItem("Token");
  const despachador = useDispatch();
  useEffect(() => {
    despachador(getAllObjects("movies", token));
  }, []);
  const movies = useSelector((state) => state.Loaded);
  return (
    <section className={Style.main_container}>
      <div className={Style.cards_container}>
        {movies ? (
          movies.map((movie) => {
            return <MovieCard {...movie} />;
          })
        ) : (
          <h1>No se encontraron resultados</h1>
        )}
      </div>
    </section>
  );
}

export default MoviesBrowser;
