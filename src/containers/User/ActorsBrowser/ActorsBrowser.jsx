import React, { useEffect } from "react";
import Style from "./DirectorBrowser.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllObjects } from "../../../actions/index";

import PersonCard from "../../../components/Users/PersonCard/PersonCard";

const DirectorBrowse = () => {
  const token = localStorage.getItem("Token");
  const despachador = useDispatch();
  useEffect(() => {
    despachador(getAllObjects("actors", token));
  }, []);

  const actores = useSelector((state) => state.Loaded);
  return (
    <section className={Style.main_container}>
      <div className={Style.cards_container}>
        {Object.entries(actores).length !== 0 ? (
          actores.map((actor) => {
            return <PersonCard entidad="actor" {...actor} />;
          })
        ) : (
          <h1>No se encontraron resultados</h1>
        )}
      </div>
    </section>
  );
};

export default DirectorBrowse;
