import { FC, useState } from 'react';
import { googleSignIn, googleSignOut, logInWithEmailAndPassword, signUpWithEmailAndPassword } from '../../firebase/auth';
import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { CustomNavLink } from '../../components/index.tsx';
import { UniversalModal, UniversalForm } from "../../components";
import { LoginProps, logInData, newUserFormData } from './helper';
import { AUTH_USER_ROUTES } from '../../router/routesNames';
import classes from './LogIn.module.scss';

export const collectFormDataSignUp = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const newUserData = {
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    birthdate: formData.get('birthdate') as string,
    gender: formData.get('gender') as string,
  }
  console.log(newUserData)
  signUpWithEmailAndPassword(newUserData);
  return redirect(AUTH_USER_ROUTES.CALENDAR)
}


export const collectFormDataLogIn = async ({request}: ActionFunctionArgs) => {
  console.log(request)
  const formData = await request.formData();
  const userData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }
  logInWithEmailAndPassword(userData.email, userData.password);
  return redirect(AUTH_USER_ROUTES.CALENDAR)
}


const LogIn: FC = () => {
  const [isOpenLogIn, setVisibleLogIn] = useState(false);
  const [isOpenSignUp, setVisibleSignUp] = useState(false);

  return (
    <div className={classes.content}>
      <h1 className={classes.contentHeader}>Chose login option</h1>
      <div className={classes.contentButtons}>
        <CustomNavLink title="Login by google" path="/calendar" className={classes.contentButtonsButtonGoogle} onClick={googleSignIn} />
        <CustomNavLink title="Login by e-mail" path='' className={classes.contentButtonsButtonEmailLogIn} onClick={() => setVisibleLogIn(!isOpenLogIn)} />
        <CustomNavLink title="SignUp with e-mail" path='' className={classes.contentButtonsButtonEmailSignUp} onClick={() => {setVisibleSignUp(!isOpenSignUp)}} />
        {isOpenLogIn && <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisibleLogIn} isOpen={true} />}
        {isOpenSignUp && <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisibleSignUp} isOpen={true} />}
      </div>
    </div>
  );
}

export default LogIn;