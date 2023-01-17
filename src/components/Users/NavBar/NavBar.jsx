import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

//Bootstrap
import '../../../styles/bootstrap.scss'
import * as bootstrap from 'bootstrap'

import SearchBar from '../SearchBar/SearchBar';
import Style from "./NavBar.scss"

function NavBar(props) {
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
            <Link className="navbar-brand" to="/">Movies App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/browse">Home</Link>
          </li>
          {
            decoded.role === 'admin'?
            <li className="nav-item admin-tools-li">
              <Link className="nav-link active" to="/admin/users">ADMIN TOOLS</Link>
          </li>: <li className="nav-item">
              <Link className="nav-link active" to="/">Favoritas</Link>
          </li>
          }
          <li className="nav-item">
            <Link className="nav-link active" to="/directors">Directores</Link>
          </li>
          <li className="nav-item"> 
            <Link className="nav-link active" to="/actors">Actores</Link>
          </li>

          <SearchBar/>

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

export default NavBar;