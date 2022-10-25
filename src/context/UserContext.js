import React from "react";
import { createContext } from "react";

const AuthContext = createContext();

const UserContext = ({ children }) => {
  const user = { displayName: "Maruf" };
  const authInfo = { user };
 
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default UserContext;
