import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/global.scss";

//Containers
import PrivateRoute from "../containers/PrivateRoute.jsx";
import Welcome from "../containers/User/Welcome/Welcome";
import Login from "../containers/User/Login/Login";
import Register from "../containers/User/Register/Register";
import Browse from "../containers/User/Browse/Browse";
import MovieDetail from "../containers/User/MovieDetail/MovieDetail";
import DirectorsBrowser from "../containers/User/DirectorsBrowser/DirectorsBrowser";

//Administrador
import AdminRoute from "../containers/AdminRoute.jsx";
import AdminUsers from "../containers/Admin/Users/AdminUsers";
import AdminMovies from "../containers/Admin/Movies/AdminMovies";
import AdminActors from "../containers/Admin/Actors/AdminActors";
import AdminDirectors from "../containers/Admin/Directors/AdminDirectors";

const App = () => {
  const token = localStorage.getItem('Token');
  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute user={token} path="/"/>}>
        <Route path="/browse" element= {<Browse/>} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/director/:id" element={<DirectorsBrowser />} />
      </Route>
      <Route element={<AdminRoute user={token} path="/"/>}>   
        <Route exact path="/admin/users" element= {<AdminUsers/>} />
        <Route exact path="/admin/movies" element= {<AdminMovies/>} />
        <Route exact path="/admin/actors" element= {<AdminActors/>} />
        <Route exact path="/admin/directors" element= {<AdminDirectors/>} />
      </Route>
    </Routes>
  );
};

export default App;
