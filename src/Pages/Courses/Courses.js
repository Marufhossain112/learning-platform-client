import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>Courses page.</h2>
    </div>
  );
};

export default Courses;
