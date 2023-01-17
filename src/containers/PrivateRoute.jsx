import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import NavBar from "../components/Users/NavBar/NavBar";

const PrivateRoute = ({user,children, path})=> {
    if(!user) {
        return <Navigate to={path}/>
    }
    else{
        return <React.Fragment>
            <NavBar/>
            <Outlet user={user}/>
        </React.Fragment> 
    }
}
export default PrivateRoute

