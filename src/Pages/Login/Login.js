import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { popupSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleHandleLogin = () => {
    popupSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const githubHandleLogin = () => {
    popupSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleForm = (event) => {
    // prevent from reloading
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleForm} className="flex flex-col gap-4 w-1/2 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            name="email"
            type="email"
            placeholder="enter your email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <div className="text-red-600">{error}</div>
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-3 text-center">
        New member ?{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>{" "}
        here
      </div>
      <Button
        onClick={googleHandleLogin}
        className="mx-auto mt-3"
        outline={true}
        gradientDuoTone="greenToBlue"
      >
        <span>
          {" "}
          <FcGoogle style={{ fontSize: "22px" }} />
        </span>
        <span style={{ marginLeft: "5px" }}> Sign in with Google</span>
      </Button>
      <Button
        onClick={githubHandleLogin}
        className="mx-auto mt-3"
        outline={true}
        gradientDuoTone="greenToBlue"
      >
        <span style={{ fontSize: "22px" }}>
          <FaGithub />
        </span>
        <span style={{ marginLeft: "5px" }}>Sign in with Github</span>
      </Button>
    </div>
  );
};

export default Login;
