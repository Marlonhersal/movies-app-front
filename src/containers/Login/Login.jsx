import React from 'react';

import Style from './Login.module.scss'
import {Link} from "react-router-dom";

function Login(props) {
    return (
    <div className={Style.login}>
        <div className={Style.form_container}>
            <span className={Style.logo}></span>
            <form action="/" className={Style.form}>
            <label for="email" className={Style.label}>Email address</label>
            <input type="text" id="email" placeholder="example@mail.cm" className={`${Style.input} ${Style.input_email}`}></input>
            <label for="password" className={Style.label}>Password</label>
            <input type="password" id="password" placeholder="*********" className={`${Style.input} ${Style.input_password}`}></input>
            <Link to='/browse'>Forgot my password</Link>
            <input type="submit" value="Log in" className={`${Style.primary_button} ${Style.login_button}`}/>
            <Link to='/register' class={`${Style.secondary_button}  ${Style.singup_button}`}><span>Sing up</span></Link>
            </form>
        </div>
    </div>
    );
}

export default Login;