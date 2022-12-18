import React from "react";
import { Route, Routes} from 'react-router-dom';

import '../styles/global.scss';

//Containers
import Welcome from "../containers/Welcome/Welcome";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Browse from "../containers/Browse/Browse";

const App = ()=>{
    return (
        <React.Fragment>
            <Routes>
                <Route e path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/browse' element={<Browse/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;