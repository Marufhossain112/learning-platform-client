import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Carousels from "../Pages/Carousel/Carousels";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../utilities/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Carousels></Carousels>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learning-hub-server.vercel.app/courses"),
      },
      {
        path: "/courses-details/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(
            `https://learning-hub-server.vercel.app/courses-details/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://learning-hub-server.vercel.app/checkout/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
