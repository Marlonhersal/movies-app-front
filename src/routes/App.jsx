import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/global.scss";

import PrivateRoute from "../containers/PrivateRoute.jsx";
import PublicRoute from "../containers/PublicRoute";

//Public
import Welcome from "../containers/Public/Welcome/Welcome";
import Login from "../containers/Public/Login/Login";
import Register from "../containers/Public/Register/Register";
//User
import MoviesBrowse from "../containers/User/MoviesBrowser/MoviesBrowser";
import DirectorsBrowse from "../containers/User/DirectorsBrowser/DirectorBrowser";
import ActorsBrowse from "../containers/User/ActorsBrowser/ActorsBrowser";

import MovieDetail from "../containers/User/MovieDetail/MovieDetail";
import DirectorDetail from "../containers/User/DirectorDetail/DirectorDetail";
import ActorDetail from "../containers/User/ActorDetail/ActorDetail";
//Administrador
import AdminRoute from "../containers/AdminRoute.jsx";
import AdminUsers from "../containers/Admin/Users/AdminUsers";
import AdminMovies from "../containers/Admin/Movies/AdminMovies";
import AdminActors from "../containers/Admin/Actors/AdminActors";
import AdminDirectors from "../containers/Admin/Directors/AdminDirectors";

const App = () => {
  const token = localStorage.getItem('Token');
  return (
    <React.Fragment>
    <Routes>
      <Route element={<PublicRoute user={token} path="/browse"/>}>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoute user={token} path="/"/>}>
        <Route path="/browse" element= {<MoviesBrowse/>}/>
        <Route path="/directors" element={<DirectorsBrowse/>}/>
        <Route path="/actors" element={<ActorsBrowse/>}/>

        <Route path="/movie/:id" element={<MovieDetail />}/>
        <Route path="/director/:id" element={<DirectorDetail />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
      </Route>
      <Route element={<AdminRoute user={token} path="/"/>}>   
        <Route exact path="/admin/users" element= {<AdminUsers/>} />
        <Route exact path="/admin/movies" element= {<AdminMovies/>} />
        <Route exact path="/admin/actors" element= {<AdminActors/>}/>
        <Route exact path="/admin/directors" element= {<AdminDirectors/>} />
      </Route>
    </Routes>
    </React.Fragment>
  );
};

export default App;
