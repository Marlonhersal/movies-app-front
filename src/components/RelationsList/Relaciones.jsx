import React, { useState, useEffect } from "react";
import S from "./Relaciones.module.scss";
import { useSelector } from "react-redux";

const {config}= require('../../../config/config')

function Post(props) {

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
    <div className={S.Container}>
        <h3>{props.title}</h3>
        {
           
            props.list?.map((item)=>(<div className={S.actorTarget}>
                <p>ID: {item.id}</p>
                <p>Nombre: {item.name}</p>
                <p>País: {item.country}</p>
            </div>))
        }
    </div>
  )
}


export default Post;
