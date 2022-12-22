import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new FacebookAuthProvider();
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [signUpError, setSignUPError] = useState("");
  const { popupSignIn, signUp, updateUserProfile } = useContext(AuthContext);
  const googleHandleLogin = () => {
    popupSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const githubHandleLogin = () => {
    // console.log("I am clicked");
    popupSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => setError(error.message));
  };
  const handleForm = (data) => {
    setSignUPError("");
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setError("");
        reset();
        handleUpdateUserProfile(data.name, data.photoURL);
      })
      .catch((error) => {
        setError(error.message);
        setSignUPError(error.message);
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
            <Label htmlFor="name2" value="Your Fullname" />
          </div>
          <TextInput
            id="name2"
            name="name"
            type="text"
            placeholder="Your name"
            shadow={true}
            {...register("name", {
              required: "Name is Required",
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            name="email"
            type="email"
            placeholder="enter your email here"
            shadow={true}
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
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
            shadow={true}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            name="repeat-password"
            type="password"
            shadow={true}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoURL" value="Enter photoURL" />
          </div>
          <TextInput
            id="photoURL"
            name="photoURL"
            type="text"
            required={false}
            shadow={true}
            {...register("photoURL")}
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{" "}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        {signUpError && <p className="text-red-600">{signUpError}</p>}
        <Button type="submit">Register</Button>
      </form>
      <div className="mt-3 text-center">
        Already have an account ?{" "}
        <Link className="text-blue-600 font-bold" to="/login">
          Login
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
export default Register;
