import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useState } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new FacebookAuthProvider();
const Register = () => {
  const [error, setError] = useState("");
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
  const handleForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value;

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        handleUpdateUserProfile(name, photoURL);
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
            <Label htmlFor="name2" value="Your Fullname" />
          </div>
          <TextInput
            id="name2"
            name="name"
            type="text"
            placeholder="Your name"
            required={true}
            shadow={true}
          />
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            name="repeat-password"
            type="password"
            required={true}
            shadow={true}
          />
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
        <div className="text-red-600">{error}</div>
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
