import React, {useState} from 'react';

import Style from './Register.module.scss'

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // enviar la solicitud POST a la API
        fetch('http://localhost:3000/users/', {
          method: 'POST',
          body: JSON.stringify({ name, email, password, age:18, role: "customer"}),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MDQ1NDM2N30.4Mac21CPF_PEXQGRZG5kgPuzFH2dEj1L8ep5u_TBrXA'
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            // manejar el error
          });
      };
    return (
        <div className={Style.login} onSubmit={handleSubmit}>
            <div className={Style.form_container}>
                <span className={Style.logo}></span>
                <h1 className={Style.title}>My account</h1>
                <form action="/" className={Style.form}>
                    <div>
                        <label for="name" className={Style.label}>Name</label>
                        <input type="text" id="name" placeholder="Camila Yoko" className={`${Style.input} ${Style.input_name}`} onChange={(event) => setName(event.target.value)}></input>
                        <label for="email-address" className={Style.label}>Email address</label>
                        <input type="email" id="email-address" placeholder="camilayokoo@gmail.com" className={`${Style.input} ${Style.input_email}`} onChange={(event) => setEmail(event.target.value)}></input>
                        <label for="password" className={Style.label}>Password</label>
                        <input type="password" id="password" placeholder="*******" className={`${Style.input} ${Style.input_password}`} onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                    <input type="submit" value="Create" className= {`${Style.primary_button} ${Style.create_button}`}></input>
                </form>
            </div>
        </div>
    );
}

export default Register;