import { FC, useState } from "react";
import {
  googleSignIn,
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from "../../firebase/auth";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import {
  CustomNavLink,
  UniversalModal,
  UniversalForm,
} from "../../components/index.tsx";
import { logInData, newUserFormData } from "./helper";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import classes from "./LogIn.module.scss";

export const authType = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const newUserData = {
    name: formData.get("name") as string,
    birthdate: formData.get("birthdate") as string,
    about: formData.get("about") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    updated_at: new Date().getTime(),
    created_at: new Date().getTime(),
    role: "authorizedUser",
    gender: formData.get("gender") as string,
    events: "",
    avatar: formData.get("photo") as string,
  };

  switch (formData.get("formType")) {
    case "signUp": {
      signUpWithEmailAndPassword(newUserData);
      return redirect(AUTH_USER_ROUTES.CALENDAR);
    }
    case "logIn": {
      logInWithEmailAndPassword(newUserData.email, newUserData.password);
      return redirect(AUTH_USER_ROUTES.CALENDAR);
    }
    default:
      throw new Error("Unknown/empty form type");
  }
};

const LogIn: FC = () => {
  const [isOpenLogIn, setVisibleLogIn] = useState(false);
  const [isOpenSignUp, setVisibleSignUp] = useState(false);

  return (
    <div className={classes.content}>
      <div className={classes.contentWrapper}>
        <h1 className={classes.contentHeader}>Chose login option</h1>
        <div className={classes.contentButtons}>
          <CustomNavLink
            title="Login by google"
            path=""
            className={classes.contentButtonsButtonGoogle}
            onClick={googleSignIn}
          />
          <CustomNavLink
            title="Login by e-mail"
            path=""
            className={classes.contentButtonsButtonEmailLogIn}
            onClick={() => {
              setVisibleLogIn(true), authType;
            }}
          />
          <CustomNavLink
            title="SignUp with e-mail"
            path=""
            className={classes.contentButtonsButtonEmailSignUp}
            onClick={() => {
              setVisibleSignUp(true), authType;
            }}
          />
          {isOpenLogIn && (
            <UniversalModal
              content={<UniversalForm data={logInData} />}
              setVisible={setVisibleLogIn}
              visible={true}
              title={""}
            />
          )}
          {isOpenSignUp && (
            <UniversalModal
              content={<UniversalForm data={newUserFormData} />}
              setVisible={setVisibleSignUp}
              visible={true}
              title={""}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
