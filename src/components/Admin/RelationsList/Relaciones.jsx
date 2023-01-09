import React, { useState, useEffect } from "react";
import S from "./Relaciones.module.scss";
import { useSelector } from "react-redux";

const {config}= require('../../../config/config')

function Post(props) {

  const datos = useSelector((state) => state.itemLoaded);
  const [movie, setMovie] = useState([]);
  const [message, setMessage] = useState("")

  useEffect(() => {
    setMovie(datos)
  }, [datos]);
  

  const agregarActor = (e) => {
    e.preventDefault();
    const actorId = document.getElementById("idActor");
    const movieId = datos.id;
    fetch(`${config.apiUrl}/movies/add-actor`, {
      method: "POST",
      body: JSON.stringify({ movieId, actorId: actorId.value }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.statusCode === 400) return setMessage(res.message);
        alert(`Actor Agregado`);
        window.location.reload()
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const eliminarActor =(id) => {
    fetch(`${config.apiUrl}/movies/remove-actor/` + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.statusCode === 400) return setMessage(res.message);
        alert(`Actor eliminado`);
        window.location.reload()
      })
  }
  
  return (
    <div className={S.relations_container}>
        <h3>{props.title}</h3>
        <div className={S.add_actor}>
          <input type="number" placeholder="Id" id="idActor" />
          <input type="button" value="Agregar Actor" onClick={agregarActor}/>
          <p className={S.message}>{message}</p>
        </div>
        <ul className={S.list_container}>
        {
            movie.actors?.map((item)=>(<li className={S.list_item}>
                <p>ID: {item.id}</p>
                <p>Nombre: {item.name}</p>
                <p>País: {item.country}</p>
                <input type="button" value="Borrar actor" onClick={()=>eliminarActor(item.MovieActor.id)} />
            </li>))
        }
        </ul>
    </div>
  )
}


export default Post;
