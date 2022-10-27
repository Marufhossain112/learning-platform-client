import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
// declare auth
const auth = getAuth(app);
// create context
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // popupSignIn for google and github
  const popupSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // create new users
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in existing users
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user information
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  // sign out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // track the user auth
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log("User auth changed", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // send the value
  const authInfo = {
    user,
    popupSignIn,
    logOut,
    signUp,
    signIn,
    updateUserProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default UserContext;
