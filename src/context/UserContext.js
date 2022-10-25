import React from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const user = { displayName: "Maruf" };
  const popupSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = { user, popupSignIn, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default UserContext;
