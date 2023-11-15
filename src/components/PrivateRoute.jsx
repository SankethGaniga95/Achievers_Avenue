import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {isAuthState}=useContext(AuthContext)

    if(!isAuthState.isAuth){
     return <Navigate to="/login"/>
    }
    return children
  
}
