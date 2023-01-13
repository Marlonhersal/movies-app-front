import React, { useState, useEffect } from "react";
import S from "./CrudDirectors.module.scss";
import { useSelector } from "react-redux";

import Lista from "../../../../components/Admin/RelationsList/Relaciones"

const {config}= require('../../../../../config/config')

function Post(props) {
  
  const datos = useSelector((state) => state.itemLoaded);
  const [director, setdirector] = useState([]);
  const [update, setUpdate] = useState(false);
  const [create, setCreate] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setdirector(datos);
    setUpdate(false);
    setCreate(false);
    setWelcomeMessage(false);
    setMessage("");
    console.log(datos)
  }, [datos]);
  useEffect(() => {
    setWelcomeMessage(true);
  }, []);

  function handleDataChange(e) {
    const { value, name } = e.target;
    setdirector({
      ...director,
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
      "movie",
      "director",
      "directors",
    ];
    let info = {};
    Object.keys(director).forEach((x) => {
      if (!notUptate.includes(x)) {
        info[x] = director[x];
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
        if (res.statusCode === 400) return setMessage(res.message);
        setUpdate(false);
        window.location.reload();
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const publicar = () => {
    fetch(`${config.apiUrl}/${props.element}`, {
      method: "POST",
      body: JSON.stringify(director),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 400) return setMessage(res.message);
        window.location.reload();
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
    console.log(message);
  };

  const nuevo = () => {
    setdirector({});
    setUpdate(true);
    setCreate(true);
    setWelcomeMessage(false);
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
        alert(`Usuario ${res} eliminado`);
        window.location.reload();

      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  
  return (
    <div className={S.main_container}>
      {welcomeMessage ? (
        <div>
          <h1 className={S.introduction_message}>
            Elige una director para modificarlo
          </h1>
          <input
            className={S.new}
            type="button"
            value="Crear Nueva director"
            onClick={nuevo}
            disabled={update}
          />
        </div>
      ) : (
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
                    value={director.name}
                    onChange={handleDataChange}
                  />
                ) : (
                  <p>{datos.name}</p>
                )}
              </div>
              <div className={S.two_elements}>
                <div className={S.email}>
                  <label>Edad:</label>
                  <br />
                  {update ? (
                    <input
                      type="text"
                      name="birthdate"
                      placeholder="año/mes/dia"
                      value={director.birthdate}
                      onChange={handleDataChange}
                    />
                  ) : (
                    <p>{datos.age}</p>
                  )}
                </div>
                <div className={S.year}>
                  <label>País:</label>
                  <br />
                  {update ? (
                    <input
                      type="text"
                      name="country"
                      value={director.country}
                      onChange={handleDataChange}
                    />
                  ) : (
                    <p>{datos.country}</p>
                  )}
                </div>
              </div>
              <div className={S.description}>
                <label>Descripción:</label>
                <br />
                {update ? (
                
                  <textarea  maxlength="500"  rows="10" className={S.input_description}
                      type="text"
                      name="description"
                      value={director.description}
                      onChange={handleDataChange}
                    />
                ) : (
                  <p>{datos.description}</p>
                )}
              </div>
              <div className={S.poster}>
                <label>Imagen:</label>
                <br />
                {update ? (
                  <input
                    type="text"
                    name="image"
                    value={director.image}
                    onChange={handleDataChange}
                  />
                ) : (
                  <p>{datos.image}</p>
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
                value="Crear Nueva director"
                onClick={nuevo}
                disabled={update}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
