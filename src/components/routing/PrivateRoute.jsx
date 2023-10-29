import React, { useContext } from 'react';
import {Navigate} from "react-router-dom";
import { authContext } from '../contexts/AuthContext';


const PrivateRoute = ({children}) => {
    const {auth, setAuthData} = useContext(authContext)
    console.log(auth.data)
    console.log( localStorage.getItem('authData'))


    return localStorage.getItem('authData') !== 'null' ? <>{children}</> : <Navigate to='/login'/>

};

export default PrivateRoute;