import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <h2>This is course detail page.</h2>
    </div>
  );
};

export default CourseDetail;
