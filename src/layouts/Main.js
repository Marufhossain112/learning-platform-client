import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

// some error occuring on commit
// so i trying commenting , these are not important
// i am just checking the commits

export default Main;
