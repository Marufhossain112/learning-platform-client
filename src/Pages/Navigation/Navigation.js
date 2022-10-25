import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
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
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Learning Hub
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
            {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
          </Tooltip>
          {user?.uid ? (
            <Button onClick={handleSignOut} className="ms-2" color="light">
              Sign Out
            </Button>
          ) : (
            <>
              <Button className="ms-2" color="light">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button className="ms-2" color="light">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
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
