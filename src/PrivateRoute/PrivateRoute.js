import { Spinner } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // when loading
  if (loading) {
    return (
      <div className="text-center mt-[230px]">
        <Spinner aria-label="Extra large  spinner example" size="xl" />
      </div>
    );
  }
// if there is no user
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  // if any user found
  return children;
};

export default PrivateRoute;
