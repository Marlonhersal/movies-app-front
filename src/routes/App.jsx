import React from "react";
import { Route, Routes} from 'react-router-dom';

import '../styles/global.scss';

//Containers
import Welcome from "../containers/Welcome/Welcome";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Browse from "../containers/Browse/Browse";
import MovieDetail from "../containers/MovieDetail/MovieDetail";

const App = ()=>{
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/browse' element={<Browse/>}/>
                <Route path='/movie/:movieId' element={<MovieDetail/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;