import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");
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
  const handleForm = (data) => {
    // prevent from reloading
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("User Login Success");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex flex-col gap-4 w-1/2 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            name="email"
            type="email"
            placeholder="enter your email"
            // required={true}
            shadow={true}
            {...register("email", {
              required: "Email Address is required",
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type="password"
            // required={true}
            shadow={true}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
        </div>{" "}
        <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
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
