import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from 'react-router-dom'


import App from "./routes/App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    )
