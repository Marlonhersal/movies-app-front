import React from "react";
import { Route, Routes} from 'react-router-dom';

import '../styles/global.scss';

import Welcome from "../containers/Welcome";
import Login from "../containers/Login";

const App = ()=>{
    return (
        <React.Fragment>
            <Routes>
                <Route e path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;