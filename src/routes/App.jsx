import React from "react";
import { Route, Routes} from 'react-router-dom';

import '../styles/global.scss';

//Containers
import Welcome from "../containers/Welcome";
import Login from "../containers/Login";
import Register from "../containers/Register";

const App = ()=>{
    return (
        <React.Fragment>
            <Routes>
                <Route e path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;