import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new FacebookAuthProvider();
const Register = () => {
  const { popupSignIn } = useContext(AuthContext);
  const googleHandleLogin = () => {
    // console.log("I am clicked");
    popupSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const githubHandleLogin = () => {
    // console.log("I am clicked");
    popupSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form className="flex flex-col gap-4 w-1/2 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
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
            type="password"
            required={true}
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
