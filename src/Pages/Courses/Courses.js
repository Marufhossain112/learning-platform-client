import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesData from "../CoursesData/CoursesData";
import "./courses.css";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div>
      <div className="courses-container">
        <div className="courses-sidebar">
          {courses.map((course) => (
            <p>{course.name}</p>
          ))}
        </div>
        <div className="courses-content">
          {courses.map((course) => (
            <CoursesData key={course.id} course={course}></CoursesData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
