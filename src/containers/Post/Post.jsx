import React, { useState, useEffect } from "react";
import S from "./Post.module.scss";
import { useSelector } from "react-redux";

function Post(props) {
  const redux = useSelector((state) => state.itemLoaded);
  const [datos, setDatos] = useState({});
  const [newItem, setNewItem] = useState(false);
  const [uptdate, setUpdate] = useState(true);

  const notUptate = ["updatedAt", "createdAt", "id", "age", "movie","actors", "movies"];

  useEffect(() => {
    setDatos(redux);
  }, [redux]);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
    setUpdate(false)
  };

  const actualizar = (event) => {
    event.preventDefault();
    let info = datos;
    notUptate.forEach((x) => {
      delete info[x];
    });
    fetch(`http://localhost:3000/${props.element}/${props.id}`, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res) {
          return setMessage("Las credenciales no son validas");
        }
        console.log(res);
        setUpdate(true)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });

  };

  const borrar = () => {
    console.log(props.element, props.id)
    fetch(`http://localhost:3000/${props.element}/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const create = () => {
    let datosVacios = {};
    Object.keys(redux).forEach((key, i) => {
      datosVacios = {
        ...datosVacios,
        [key]: "",
      };
    });
    setDatos(datosVacios);
    setNewItem(true)
  };

  const publicar = () => {
    let info = datos;
    notUptate.forEach((x) => {
      delete info[x];
    });
    fetch(`http://localhost:3000/${props.element}`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res) {
          return setMessage("Las credenciales no son validas");
        }
        console.log(res);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const agregarActor = (e) => {
    e.preventDefault();
    const actorId = document.getElementById("idActor").value;
    const movieId = datos.id;
    fetch(`http://localhost:3000/movies/add-actor`, {
      method: "POST",
      body: JSON.stringify({ movieId, actorId }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  return (
    <form className={S.container}>
      {Object.keys(datos).map((key, i) => (
        <div key={`input-${i}`}>
          <label htmlFor={`key`}>{key}</label>
          {props.element == "user" ? (
            <span>{datos[key]}</span>
          ) : !notUptate.includes(key) ? (
            <input
              type="text"
              id={key}
              name={key}
              value={datos[key]}
              onChange={handleDataChange}
            />
          ) : (
            <span>
              {typeof datos[key] != "object"
                ? datos[key]
                : datos[key].map((x) => (
                    <div>
                      <span>{x.id}</span>
                      <span>{x.name}</span>
                    </div>
                  ))}
            </span>
          )}
        </div>
      ))}

      {
        props.element == "movies"?<div >
        <label>New {props.element}</label>
        <input type="number" placeholder="actor id" id="idActor" />
        <input type="button" value="Agregar" onClick={agregarActor} />
        </div>:
        null
      }
      

      <input type="button" value="mostrar" onClick={() => console.log(datos)} disabled= "true"/>

      <input type="button" value="Actualizar"  onClick={actualizar} disabled={uptdate || newItem} />
      <input type="button" value="borrrar" id="delete_button" onClick={borrar} disabled={newItem}/>
      {
        newItem? <input type="button" value="Crear" onClick={publicar}/>:
        <input type="button" value="Nuevo" id="create_button" onClick={create}/>
      }
      
      
    </form>
  );
}

export default Post;
