import React, { useState, useEffect } from "react";
import S from "./CrudActors.module.scss";
import { useSelector } from "react-redux";

import Lista from "../../../components/RelationsList/Relaciones"

const {config}= require('../../../../config/config')

function Post(props) {
  
  const datos = useSelector((state) => state.itemLoaded);

  const borrar = () => {
    fetch(`${config.apiUrl}/${props.element}/${datos.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(`Usuario ${res} eliminado`);
        window.location.reload();

      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const eliminarActor =(id)=>{
    fetch(`${config.apiUrl}/movies/remove-actor/` + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
  }
  
  return (
    <div className={S.container}>
    <div className={S.form} >
      <div className={S.id}>
        <label>ID:</label>
        <span>{datos.id}</span>
      </div>
      <div className={S.name}>
        <label>Nombre:</label>
        <br />
        <span>{datos.name}</span>
      </div>
      <div className={S.name}>
        <label>País:</label>
        <br />
        <span>{datos.country}</span>
      </div>
      <div className={S.email}>
        <label>Year:</label>
        <br />
        <span>{datos.year}</span>
      </div>
      <div className={S.duration}>
        <label>Duracion:</label>
        <br />
        <span>{datos.duration}</span>
      </div>
      <div className={S.duration}>
        <label>Director:</label>
        <br />
        <span>{datos.directorId? datos.director.name:null}</span>
      </div>
      <div className={S.description}>
        <label>Descripción:</label>
        <br />
        <span>{datos.description}</span>
      </div>
      <div className={S.poster}>
        <label>Poster:</label>
        <br />
        <span>{datos.image}</span>
      </div>
      <div className={S.create}>
        <label>Fecha de creación:</label>
        <br />
        <span>{datos.createdAt}</span>
      </div>
      <div className={S.update}>
        <label>Ultima actualizacón:</label>
        <br />
        <span>{datos.updatedAt}</span>
      </div>
      <input className={S.deleteButton} type="button" value="Eliminar usuario" onClick={borrar}/>
    </div>
    <Lista title="Peliculas" list={datos.movies} token={props.token}/>
    </div>
  )
}


export default Post;
