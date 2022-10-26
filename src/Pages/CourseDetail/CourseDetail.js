import { Button, Card } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { createRef } from "react";
import Pdf from "react-to-pdf";
// import './courseDetail.css'

const ref = createRef();
const CourseDetail = () => {
  const courseDetails = useLoaderData();
  //   console.log(courseDetails);
  const { name, headline, img, desc, price, features, heading, id } =
    courseDetails;
  return (
    <div className="max-w-sm mx-auto mt-5">
      <div className="flex">
        <h3 className="text-2xl text-center mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
          {heading}
        </h3>
        <Pdf targetRef={ref} filename="courses.pdf">
          {({ toPdf }) => (
            <FaFilePdf onClick={toPdf} className="text-3xl mt-1"></FaFilePdf>
          )}
        </Pdf>
      </div>

      <Card imgSrc={img}>
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc.length > 250 ? desc.slice(0, 250) + "..." : desc}
        </p>
        <ul ref={ref} style={{ listStyle: "square", marginLeft: "16px" }}>
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
        <Button gradientDuoTone="cyanToBlue">
          <Link to={`/checkout/${id}`}>Get Premium Access </Link>
        </Button>
      </Card>
    </div>
  );
};

export default CourseDetail;
