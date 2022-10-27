import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/2x/external-learning-online-education-wanicon-lineal-color-wanicon.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Learning Hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 lg:space-x-3">
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
            {<Avatar alt="user" img={user?.photoURL} rounded={true} />}
          </Tooltip>
          {/* <div> */}
          {user?.uid ? (
            <Button onClick={handleSignOut} color="light">
              Sign Out
            </Button>
          ) : (
            <>
              <Button color="light">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button className="register-btn" color="light">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
          <Button onClick={handleToggle} color="light">
            {toggle ? "Light" : "Dark"}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink as={Link} to="/" active={true}>
            Home
          </NavLink>
          <NavLink as={Link} to="/courses" active={true}>
            Courses
          </NavLink>
          <NavLink as={Link} to="/blog">
            Blog
          </NavLink>
          <NavLink as={Link} to="/faq">
            FAQ
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
