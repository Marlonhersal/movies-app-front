import React from 'react';

import Style from '../styles/Register.module.scss'

function Register(props) {
    return (
        <div className={Style.login}>
            <div className={Style.form_container}>
                <span className={Style.logo}></span>
                <h1 className={Style.title}>My account</h1>
                <form action="/" className={Style.form}>
                    <div>
                        <label for="name" className={Style.label}>Name</label>
                        <input type="text" id="name" placeholder="Camila Yoko" className={`${Style.input} ${Style.input_name}`}></input>
                        <label for="email-address" className={Style.label}>Email address</label>
                        <input type="email" id="email-address" placeholder="camilayokoo@gmail.com" className={`${Style.input} ${Style.input_email}`}></input>
                        <label for="password" className={Style.label}>Password</label>
                        <input type="password" id="password" placeholder="*******" className={`${Style.input} ${Style.input_password}`}></input>
                    </div>
                    <input type="submit" value="Create" className= {`${Style.primary_button} ${Style.create_button}`}></input>
                </form>
            </div>
        </div>
    );
}

export default Register;