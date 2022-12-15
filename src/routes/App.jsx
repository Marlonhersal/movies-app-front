import React from "react";
import { Route, Routes} from 'react-router-dom';

import '../styles/global.scss';

import Welcome from "../containers/Welcome";

const App = ()=>{
    return (
        <React.Fragment>
            <Routes>
                <Route e path='/' element={<Welcome/>}/>
                <Route path='/im' element={<h1>Hola Mundo</h1>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;