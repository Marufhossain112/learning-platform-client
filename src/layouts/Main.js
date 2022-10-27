import React from "react";
import { Outlet } from "react-router-dom";
import Carousels from "../Pages/Carousel/Carousels";
import Navigation from "../Pages/Navigation/Navigation";
// import Navigation from "../Pages/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
