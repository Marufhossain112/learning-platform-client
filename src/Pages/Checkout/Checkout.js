import { Button, Card } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Checkout = () => {
  const checkoutCourses = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { displayName, email } = user;
  // console.log(checkoutCourses);
  const { name, price, features } = checkoutCourses;
  return (
    <div>
      <h2 className="text-center my-6 text-3xl font-bold underline">
        Checkout now
      </h2>
      <div className="max-w-sm mx-auto">
        <Card>
          {}
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Standard plan
          </h5>
          <p className="font-bold text-2xl">{name}</p>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {price}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /life time
            </span>
          </div>
          <ul role="list" className="my-7 space-y-5">
            {features.map((feature) => (
              <li>
                <span className="flex">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            gradientDuoTone="greenToBlue"
            className="inline-flex w-full justify-center rounded-lg bg-green-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            Choose plan
          </Button>
        </Card>
        <Card className="mt-5">
          <h5 className="text-2xl font-semi tracking-tight text-gray-900 dark:text-white">
            Item : {name}
          </h5>
          <p className="font-medium text-gray-700 dark:text-gray-400">
            Ordered by : {displayName}
          </p>
          <p className="font-medium text-gray-700 dark:text-gray-400">
            Email : {email}
          </p>
          <p className="font-medium text-gray-700 dark:text-gray-400">
            Total Price : ${price}
          </p>
          <Button gradientDuoTone="greenToBlue">
            Checkout
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
