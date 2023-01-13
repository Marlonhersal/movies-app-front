import React from "react";
import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({user,children, path})=> {
    if(user) {
        return <Navigate to={path}/>
    }
    else{
        return <Outlet/>
    }
}
export default PrivateRoute

