import React, { useState, useEffect } from "react";
import S from "./CrudMovies.module.scss";
import { useSelector } from "react-redux";

import { data } from "autoprefixer";
const {config}= require('../../../../../config/config')

function Post(props) {
  const datos = useSelector((state) => state.itemLoaded);
  const [movie, setMovie] = useState([]);
  const [update, setUpdate] = useState(false);
  const [create, setCreate] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [message, setMessage] = useState("")
  
  useEffect(() => {
    setMovie(datos);
    setUpdate(false)
    setCreate(false)
    setWelcomeMessage(false)
    setMessage("")
  }, [datos]);
  useEffect(()=>{
    setWelcomeMessage(true)
  },[])
  
  function handleDataChange(e) {
    const { value, name } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  }

  const actualizar = (event) => {
    event.preventDefault();
    const notUptate = [
      "updatedAt",
      "createdAt",
      "id",
      "age",
      "director",
      "actors",
    ];
    let info = {};
    Object.keys(movie).forEach((x) => {
      if (!notUptate.includes(x)) {
        info[x] = movie[x];
      }
    });
    fetch(`${config.apiUrl}/${props.element}/${datos.id}`, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.statusCode === 400) return setMessage(res.message);
        setUpdate(false);
        window.location.reload()
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const publicar = () => {

    fetch(`${config.apiUrl}/${props.element}`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {

        if(res.statusCode === 400) return setMessage(res.message);
        window.location.reload()
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
        
      });
      console.log(message)
  };

  const nuevo = () => {
    setMovie({});
    setUpdate(true);
    setCreate(true);
    setWelcomeMessage(false)
  };

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
        if(res.statusCode === 400) return setMessage(res.message);
        alert(`Usuario ${res} eliminado`);
        window.location.reload();
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  return (
      <div className={S.main_container}>
        {
            welcomeMessage?
          <div>
            <h1 className={S.introduction_message}>Elige una Pelicula para modificarla</h1>
            <input
              className={S.new}
              type="button"
              value="Crear Nueva Pelicula"
              onClick={nuevo}
              disabled= {update}
            />
          </div>
          :
          <div>
            
        <div className={S.info_container}>
          <div className={S.editable_info}>
            <div className={S.id}>
              <p>ID: {datos.id}</p>
            </div>

            <div className={S.name}>
              <label>Nombre:</label>
              {update ? (
                <input
                  type="text"
                  name="name"
                  value={movie.name}
                  onChange={handleDataChange}
                />
              ) : (
                <p>{datos.name}</p>
              )}
            </div>
            <div className={S.two_elements}>
            <div className={S.year}>
              <label>País:</label>
              <br />
              {update ? (
                <input
                  type="text"
                  name="country"
                  value={movie.country}
                  onChange={handleDataChange}
                />
              ) : (
                <p>{datos.country}</p>
              )}
            </div>
            <div className={S.email}>
              <label>Year:</label>
              <br />
              {update ? (
                <input
                  type="text"
                  name="year"
                  value={movie.year}
                  onChange={handleDataChange}
                />
              ) : (
                <p>{datos.year}</p>
              )}
            </div>
              </div>
            <div className={S.duration}>
              <label>Duracion:</label>
              <br />
              {update ? (
                <input
                  type="text"
                  name="duration"
                  value={movie.duration}
                  onChange={handleDataChange}
                />
              ) : (
                <p>{datos.duration}</p>
              )}
            </div>
            <div className={S.director}>
              <label>Director:</label>
              <br />
              {update ? (
                <input
                  type="number"
                  name="directorId"
                  value={movie.directorId}
                  onChange={handleDataChange}
                />
              ) : (
                <p>
                  {datos.directorId
                    ? `ID:${datos.director.id} ${datos.director.name}`
                    : null}
                </p>
              )}
            </div>
            <div className={S.description}>
              <label>Descripción:</label>
              <br />
              {update ? (
                <textarea  maxlength="500"  rows="10" className={S.input_description}
                type="text"
                name="description"
                value={movie.description}
                onChange={handleDataChange}
              />
              ) : (
                <p>{datos.description}</p>
              )}
            </div>
            <div className={S.poster}>
              <label>Poster:</label>
              <br />
              {update ? (
                <input
                  type="text"
                  name="poster"
                  value={movie.poster}
                  onChange={handleDataChange}
                />
              ) : (
                <p>{datos.poster}</p>
              )}
            </div>
          </div>

          {create ? null : (
            <div className={S.two_elements}>
              <div>
                <label>Fecha de creación:</label>
                <br />
                <p>{datos.createdAt}</p>
              </div>
              <div>
                <label>Ultima actualizacón:</label>
                <br />
                <span>{datos.updatedAt}</span>
              </div>
            </div>
          )}
        </div>
        <p className={S.message}>{message}</p>
        <div className={S.buttons_containers}>
          <input
            className={S.deleteButton}
            type="button"
            value="Eliminar usuario"
            onClick={borrar}
            disabled={create || update}
          />
          {update ? (
            <input
              className={S.updateButton}
              type="button"
              value="Guardar Cambios"
              onClick={actualizar}
              disabled={create}
            />
          ) : (
            <input
              className={S.updateButton}
              type="button"
              value="Editar"
              onClick={() => setUpdate(true)}
              
            />
          )}
          
          {create ? (
            <input type="button" value="Publicar" onClick={publicar} />
          ) : (
            <input
              className={S.new}
              type="button"
              value="Crear Nueva Pelicula"
              onClick={nuevo}
              disabled= {update}
            />
          )}
        </div>
          </div>
        }
      </div>
  );
}

export default Post;
