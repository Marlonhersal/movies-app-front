import React, { useState, useEffect } from "react";
import S from "./CrudUsers.module.scss";
import { useSelector } from "react-redux";

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
      <div className={S.email}>
        <label>Email:</label>
        <br />
        <span>{datos.email}</span>
      </div>
      <div className={S.name}>
        <label>Contraseña:</label>

        <span>******</span>
      </div>
      <div className={S.role}>
        <label>Role:</label>
        <br />
        <span>{datos.role}</span>
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
    </div>
  );
}


export default Post;
