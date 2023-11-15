import React, { createContext, useState } from 'react'

export const AuthContext=createContext()

export const AuthContextProvider = (props) => {
    const [isAuthState,setIsAuthState]=useState({
        isAuth:false,
        token:null,
        total:""
    })
    const loginUser=(token)=>{
        setIsAuthState({
            isAuth:true,
            token:token
        })
    }
    const getTotal = (total) => {
        setIsAuthState((prevAuthState) => ({
          ...prevAuthState,
          total: total
        }));
      };
    const logoutUser=()=>{
        setIsAuthState({
            isAuth:false,
            token: null
        })
    }
  return (
    <AuthContext.Provider value={{isAuthState,loginUser,logoutUser,getTotal}}>
        {props.children}
    </AuthContext.Provider>
    
  )
}
