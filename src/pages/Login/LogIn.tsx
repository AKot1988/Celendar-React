import { FC, useState} from 'react';
import { googleSignIn, logInWithEmailAndPassword, signUpWithEmailAndPassword } from '../../firebase/auth';
import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { CustomNavLink, UniversalModal, UniversalForm  } from '../../components/index.tsx';
import { logInData, newUserFormData } from './helper';
import { AUTH_USER_ROUTES, COMMON_ROUTES, ADMIN_ROUTES } from '../../router/routesNames';
import classes from './LogIn.module.scss';

export const authType = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const newUserData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    birthdate: formData.get('birthdate') as string,
    gender: formData.get('gender') as string,
    formType: formData.get('formType') as string
  }
  console.log(newUserData)

  switch (formData.get('formType')) {
    case 'signUp': {
      signUpWithEmailAndPassword(newUserData);
      return redirect(COMMON_ROUTES.HOME);
    }
    case 'logIn': {
      logInWithEmailAndPassword(newUserData.email, newUserData.password);
      return redirect(COMMON_ROUTES.HOME);
    }
    default:
      throw new Error('Unknown form type');
  }
}

const LogIn: FC = () => {
  const [isOpenLogIn, setVisibleLogIn] = useState(false);
  const [isOpenSignUp, setVisibleSignUp] = useState(false);

  return (
      <div className={classes.content}>
        <h1 className={classes.contentHeader}>Chose login option</h1>
        <div className={classes.contentButtons}>
          <CustomNavLink title="Login by google" path='' className={classes.contentButtonsButtonGoogle} onClick={googleSignIn} />
          <CustomNavLink title="Login by e-mail" path='' className={classes.contentButtonsButtonEmailLogIn} onClick={()=>{setVisibleLogIn(true), authType}} />
          <CustomNavLink title="SignUp with e-mail" path='' className={classes.contentButtonsButtonEmailSignUp} onClick={()=>{setVisibleSignUp(true), authType}} />
          {isOpenLogIn && <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisibleLogIn} isOpen={true} />}
          {isOpenSignUp && <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisibleSignUp} isOpen={true} />}
        </div>
      </div>
  );
}

export default LogIn;