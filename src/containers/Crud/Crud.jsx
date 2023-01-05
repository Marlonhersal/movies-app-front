import React, { useState, useEffect } from "react";
import S from "./Crud.module.scss";
import { useSelector } from "react-redux";

const {config}= require('../../../config/config')

function Post(props) {
  const redux = useSelector((state) => state.itemLoaded);
  const [datos, setDatos] = useState({});
  const [newItem, setNewItem] = useState(false);
  const [uptdate, setUpdate] = useState(true);
  const notUptate = ["updatedAt", "createdAt", "id", "age", "movie","actors", "movies"];
  useEffect(() => {
    setDatos(redux);
  }, [redux]);

  console.log("Hola")
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
    fetch(`${config.apiUrl}/${props.element}/${props.id}`, {
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
    fetch(`${config.apiUrl}/${props.element}/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.statusCode) return alert("Verifica que el elemnto que deseas borrar no está asociado a nada");
        alert(res, "borrado")
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
    fetch(`${config.apiUrl}/${props.element}`, {
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
        setNewItem(true)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  const agregarActor = (e) => {
    e.preventDefault();
    const actorId = document.getElementById("idActor").value;
    const movieId = datos.id;
    fetch(`${config.apiUrl}/movies/add-actor`, {
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

    <form >
      {/* Renderizado de los inputs para observar y modificar */}
      {Object.keys(datos).map((key, i) => (
        /* Keys que no se quieren mostrar */
        key != "age"?
        <div key={`input-${i}`}>
          <label htmlFor={`key`}>{key}   :</label>
          {
          //Si lo se va a mostar son los datos de los usuarios no se permite modificar los datos
          props.element == "user" ?
          (
            <span>{datos[key]}</span>
          ) : 
            //Si no se renderiza un input con datos cargados para editarlos
            
            //Se excluyen key como el id o las fechas de creacion para no permitir editarlo
            !notUptate.includes(key) ? (
            <input
              type="text"
              id={key}
              name={key}
              value={datos[key]}
              onChange={handleDataChange}
              className={S.inputsUpdate}
            />
          ) : 
          //En caso de que no se quiera dar la posiblidad de editar, simplemente se mustran los datos como texto
          (
            <span>
              {
              //Si los datos son objetos se renderiza una lista
              typeof datos[key] != "object"
                ? datos[key]
                : datos[key].map((x) => (
                    <div className={S.objectList}>
                      <span>{x.id} </span>
                      <span>{x.name}  </span>
                      <input type="button" value="X" className={S.deleteButton} onClick={()=>eliminarActor(x.MovieActor.id)} />
                    </div>
                  ))}
            </span>
          )}
        </div>: null
      ))}

      {
        props.element == "movies"?<div className={S.addItemInputs} >
        <label>Agregar actor  :</label>
        <input type="number" placeholder="actor id" id="idActor" />
        <input type="button" value="Agregar" onClick={agregarActor} />
        </div>:
        null
      }
      
      <div className={S.buttonsContainer}>
      {/* <input type="button" value="mostrar" onClick={() => console.log(datos)} disabled= "true"/> */}

      <input type="button" value="Actualizar"  onClick={actualizar} disabled={uptdate || newItem} />
      <input type="button" value="borrrar" id="delete_button" onClick={borrar} disabled={newItem}/>
      {
        newItem?
         <input type="button" value="Crear" onClick={publicar}/>:
        <input type="button" value="Nuevo" id="create_button" onClick={create}/>
      }
      </div>
    </form>
    </div>
  );
}

export default Post;
