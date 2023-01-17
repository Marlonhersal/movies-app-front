import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";

import Style from "./Register.module.scss";

const {config}= require('../../../../config/config')

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return setMessage("Nombre requerido");
    if (!/\S+@\S+\.\S+/.test(email)) return setMessage("Email requerido");
    if (!password) return setMessage("Contraseña requerida");

    fetch(`${config.apiUrl}/users/`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, role: "customer" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 400) {
          return setMessage(data.message);
        }
        alert("Cuenta Creada");
        window.location.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={Style.login} onSubmit={handleSubmit}>
      <div className={Style.form_container}>
        <span className={Style.logo}></span>
        <h1 className={Style.title}>My account</h1>
        <form action="/" className={Style.form}>
          <label className={Style.message}>{message}</label>
          <div>
            <label for="name" className={Style.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Camila Yoko"
              className={`${Style.input} ${Style.input_name}`}
              onChange={(event) => setName(event.target.value)}
            ></input>
            <label for="email-address" className={Style.label}>
              Email address
            </label>
            <input
              type="email"
              id="email-address"
              placeholder="camilayokoo@gmail.com"
              className={`${Style.input} ${Style.input_email}`}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label for="password" className={Style.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*******"
              className={`${Style.input} ${Style.input_password}`}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <input
            type="submit"
            value="Create"
            className={`${Style.primary_button} ${Style.create_button}`}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Register;
