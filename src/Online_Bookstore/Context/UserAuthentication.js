import React, { createContext, useEffect, useState } from 'react'
export const UserAuthentication=createContext()
const UserAuthenticationProvider = props => {
    const[user,setUser]=useState()
    useEffect(()=>{
        if(window.localStorage.getItem("user_login")){
            const loginData=JSON.parse(window.localStorage.getItem("user_login"))
            setUser(loginData)
        }
        
    },[])
  return (
    <UserAuthentication.Provider value={{user,setUser}}>
        {props.children}
    </UserAuthentication.Provider>
  )
}

export default UserAuthenticationProvider