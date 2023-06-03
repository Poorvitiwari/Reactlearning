import React, { createContext, useEffect, useState } from 'react'
export const UserAuthentication=createContext()
const UserAuthenticationProvider = props => {
  const [user, setUser] = useState();

  useEffect(() => {
      const loginData = JSON.parse(window.localStorage.getItem("user_login"));
      if (loginData) {
          setUser([loginData]);
      }
  }, []);

  console.log("auth", window.localStorage.getItem("user_login"));
  
  return (
      <UserAuthentication.Provider value={{ user, setUser }}>
          {props.children}
      </UserAuthentication.Provider>
  );
};


export default UserAuthenticationProvider