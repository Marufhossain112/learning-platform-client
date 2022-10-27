import React from "react";
import { Carousel } from "flowbite-react";

const Carousels = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <h2 className="text-center font-bold lg:text-5xl sm:text-2xl md:text-3xl  my-5 pb-3">
        Welcome to the Learning Hub{" "}
      </h2>
      <Carousel>
        <img
          style={{ width: "22%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png"
          alt="..."
        />
        <img
          style={{ width: "45%" }}
          src="https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"
          alt="..."
        />
        <img
          style={{ width: "25%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          alt="..."
        />
        <img
          style={{ width: "45%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
          alt="..."
        />
        <img
          src="https://kotlinlang.org/assets/images/twitter/general.png"
          alt="..."
        />
        <img
          style={{ width: "13%" }}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Carousels;
