import React, { useState, useEffect } from "react";
import S from "./Post.module.scss";
import { useSelector } from "react-redux";
function Post(props) {
  const redux = useSelector(state => state.itemLoaded)
  const [datos, setDatos] = useState({});
  console.log("Contructor")
  useEffect(() => {
    console.log("Ahora nos volvimo a ilusionar")
    setDatos(redux)
    console.log(datos)
  },[redux]);

  /* const getData = async () => {
    const data = await fetch(
      `http://localhost:3000/${props.element}/${props.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const dataJson = await data.json();
    setDatos(dataJson);
  }; */

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const notUptate = ["updatedAt", "createdAt", "id", "age", "role", "movies"]

 const actualizar = (event) => {
    event.preventDefault();
    let info = datos;
    notUptate.forEach((x)=>{
      delete info[x]
    })

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
        console.log(res)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };
  const borrar =()=> {
    fetch(`http://localhost:3000/${props.element}/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(props.element + " " + res + "Borrado")
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }
  const create = ()=>{
    let datosVacios= {}
    Object.keys(redux).forEach((key, i) => {
      datosVacios = {
        ...datosVacios,
      [key]: "",
      }
    })
    
    setDatos(datosVacios)
  }

  const publicar = ()=>{
    let info = datos;
    notUptate.forEach((x)=>{
      delete info[x]
    })
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
        console.log(res)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }
  
  
  return (
    <form className={S.container} >
      {Object.keys(datos).map((key, i) => (
        <div key={`input-${i}`}>
          <label htmlFor={`key`}>{key}</label>
          { 
            !notUptate.includes(key)?<input
            type="text"
            id={key}
            name={key}
            value={datos[key]}
            onChange={handleDataChange}
          />: <span>{datos[key]}</span>
          }
          
        </div>
      ))}
       <input type="button" value="mostrar" onClick={()=> console.log(datos)}/>
       <input type="button" value="borrrar" onClick={borrar}/>
       <input type="button" value={"Nuevo"} onClick={create}/>
       <input type="button" value="Actualizar" onClick={actualizar}/>
       <input type="button" value="Crear" onClick={publicar}/>
    </form>
  );
}

export default Post;
