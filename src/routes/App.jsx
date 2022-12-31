import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/global.scss";

//Containers
import PrivateRoute from "../containers/PrivateRoute.jsx";
import Welcome from "../containers/Welcome/Welcome";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Browse from "../containers/Browse/Browse";
import MovieDetail from "../containers/MovieDetail/MovieDetail";
import DirectorsBrowser from "../containers/Directors/DirectorsBrowser";
import AdminTols from "../containers/AdminTols/AdminTols";

const App = () => {
  const token = localStorage.getItem('Token');
  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute user={token} path="/"/>}>
        <Route path="/browse" element= {<Browse/>} />
        <Route path="/admin/:element" element= {<AdminTols/>} />
        <Route path="/admin/:element/:id" element= {<AdminTols/>} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/director/:id" element={<DirectorsBrowser />} />
      </Route>
    </Routes>
  );
};

export default App;
