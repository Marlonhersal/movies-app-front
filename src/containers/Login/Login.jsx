import React, {useState} from 'react';

import Style from './Login.module.scss'
import {Link} from "react-router-dom";
import { data } from 'autoprefixer';



function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // enviar la solicitud POST a la API
        fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            window.location.replace('/browse');
            console.log(data)
          })
          .catch((error) => {
            alert('Datos Incorrectos')
          });
      };

    return (
    <div className={Style.login}>
        <div className={Style.form_container}>
            <span className={Style.logo}></span>
            <form action="/" className={Style.form} onSubmit={handleSubmit} >
            <label for="email" className={Style.label}>Email address</label>
            <input type="text" id="email" placeholder="example@mail.cm" className={`${Style.input} ${Style.input_email}`} onChange={(event) => setEmail(event.target.value)} ></input>
            <label for="password" className={Style.label}>Password</label>
            <input type="password" id="password" placeholder="*********" className={`${Style.input} ${Style.input_password}`} onChange={(event) => setPassword(event.target.value)}></input>
            <Link to='/browse'>Forgot my password</Link>
            <input type="submit" value="Log in" className={`${Style.primary_button} ${Style.login_button}`}/>
            <Link to='/register' class={`${Style.secondary_button}  ${Style.singup_button}`}><span>Sing up</span></Link>
            </form>
        </div>
    </div>
    );
}

export default Login;