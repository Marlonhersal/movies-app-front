import React from 'react';

import '../styles/Login.scss'
import {Link} from "react-router-dom";

function Login(props) {
    return (
    <div className="login">
        <div className="form-container">
            <span className='logo'></span>
            <form action="/" className="form">
            <label for="email" className="label">Email address</label>
            <input type="text" id="email" placeholder="example@mail.cm" className="input input-email"></input>
            <label for="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password"></input>
            <input type="submit" value="Log in" className="primary-button login-button"/>
            <Link to='/recover'>Forgot my password</Link>
            </form>
            <button class="secondary-button signup-button" value='Sin Up'><Link to='/register'>Sing up</Link></button >
        </div>
    </div>
    );
}

export default Login;