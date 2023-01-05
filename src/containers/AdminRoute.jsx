import React from "react";
import jwt_decode from "jwt-decode";
import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({user,children, path})=> {
    if(!user) return <Navigate to={path}/>
    const decoded = jwt_decode(user);
    if(decoded.role != "admin") return <Navigate to={path}/>

    return <Outlet user={user}/>
}
export default PrivateRoute

