import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Navigation.css"

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar  fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Tooltip
            content={
              <div>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                {user?.email}
                </span>
              </div>
            }
            placement="left"
          >
            {
              <Avatar
                alt="User settings"
                img={user?.photoURL}
                rounded={true}
              />
            }
          </Tooltip>
        </div>
        <Navbar.Collapse>
          <NavLink as={Link} to="/" active={true}>
            Home
          </NavLink>
          <NavLink as={Link} to="/news" active={true}>
            Courses
          </NavLink>
          <NavLink as={Link} to="/login">
            Blog
          </NavLink>
          <NavLink as={Link} to="/register">
            FAQ
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
