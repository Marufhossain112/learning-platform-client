import { Button, Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkoutCourses = useLoaderData();
  console.log(checkoutCourses);
  const { name, price, features } = checkoutCourses;
  return (
    <div>
      <h2 className="text-center my-6 text-3xl font-bold underline">
        Checkout now
      </h2>
      <div className="max-w-sm mx-auto">
        <Card>
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
      </div>
    </div>
  );
};

export default Checkout;
