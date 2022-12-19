import React from 'react';
// Import our custom CSS
import '../../styles/bootstrap.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import SearchBar from '../SearchBar/SearchBar';


function NavBar(props) {
    return (
    <nav className= "navbar navbar-expand-lg bg-light">
      <div className= "container-fluid">
            <a className="navbar-brand " href="#" >Movies App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Favoritas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Directores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Actores</a>
          </li>
        </ul>
          <SearchBar/>
        </div>
      </div>
    </nav>
    );
}

export default NavBar;