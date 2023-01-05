import React from 'react';
import { Link } from 'react-router-dom';

// Import our custom CSS
import '../../styles/bootstrap.scss'
import jwt_decode from "jwt-decode";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


//import Style from "./NavBar.scss"


function NavBarAdmin(props) {

  const token = localStorage.getItem('Token');
  if(token){
    var decoded = jwt_decode(token);
  }
  function logout(){
    localStorage.setItem("Token", "");
    window.location.href = '/login';
  }
    return (
        <nav className= "navbar navbar-expand-lg bg-light">
          <div className= "container-fluid">
                <a className="navbar-brand " href="/" >Panel de control</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" to="/browse">Home</Link>
              </li>
                <li className="nav-item admin-tools-li">
                <Link className="nav-link active" to="/admin/users">Usuarios</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/admin/movies">Peliculas</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/admin/actors">Actores</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/admin/directors">Directores</Link>
              </li>
              <div className="nav-item user-info-movile">
                <p className='c1'>{decoded.name}</p>
                <p className='c2'>{decoded.email}</p> 
                <div className='c3'> 
                <button onClick={logout}  type="button" class="btn btn-secondary">LogOut</button>
                </div>
              </div>
            </ul>
              <div className="btn-group dropstart">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {decoded.role}
                </button>
                  <ul className="dropdown-menu">
                    <li >
                    {decoded.name}
                    </li>
                    <li >
                    {decoded.email}
                    </li>
                    <button onClick={logout}  type="button" className="btn btn-secondary ">
                    LogOut
                    </button>
                  </ul>
              </div>
            </div>
          </div>
        </nav>
        );
}

export default NavBarAdmin;