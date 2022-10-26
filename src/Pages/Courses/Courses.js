import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesData from "../CoursesData/CoursesData";
import "./courses.css";
const Courses = () => {
  const courses = useLoaderData();
//   console.log(courses);

  return (
    <div>
      <div className="courses-container">
        <div className="courses-sidebar">
          <b>Courses</b>
          <div>
            {courses.map((course) => (
              <p key={course.id}>
                {" "}
                <Link to={`/courses-details/${course.id}`}> {course.name}</Link>
              </p>
            ))}
          </div>
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
