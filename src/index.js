import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from 'react-router-dom'

//Redux

import { Provider } from "react-redux";
import store from "./store/index";


import App from "./routes/App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </Provider>
)
