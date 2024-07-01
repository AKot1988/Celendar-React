import React from 'react';
import { FC, useState, useEffect } from 'react';
import { googleSignIn, googleSignOut, logInWithEmailAndPassword, signUpWithEmailAndPassword } from '../../firebase/auth';

import { Header, Footer, UniversalModal, UniversalForm } from "../../components";
import { AUTH_USER_ROUTES, COMMON_ROUTES } from '../../router/routesNames';
import { Method, FormProps } from '../../components/UniversalForm/types';
import { InputType } from '../../components/Input/type';
import classes from './LogIn.module.scss';
import { redirect } from 'react-router-dom';

// const newUserFormData = {
//   method: Method.POST,
//   action: AUTH_USER_ROUTES.CALENDAR,
//   title: 'Sign up',
//   inputs: [
//     {
//       id: 'email',
//       type: 'email',
//       placeHolder: 'Email',
//       value: '',
//       name: 'email',
//       required: true,
//       label: 'Email'
//     },
//     {
//       id: 'password',
//       type: 'password',
//       placeHolder: 'Password',
//       value: '',
//       name: 'password',
//       required: true,
//       label: 'Password'
//     },
//   ],
//   button: {
//     text: 'Sign up',
//     clickHandler: ()=>signUpWithEmailAndPassword
//   },
//   // redirect: AUTH_USER_ROUTES.CALENDAR,
// }

const newUserFormData: FormProps = {
  title: "Новий користувач",
  action: COMMON_ROUTES.HOME,
  method: Method.POST,
  inputs: [
    {
      id: "1",
      type: InputType.TEXT,
      placeHolder: "Enter your username",
      name: "username"
    },
    {
      id: "2",
      type: InputType.PASSWORD,
      placeHolder: "Enter your password",
      name: "password",
      required: true
    },
    {
      id: "3",
      type: InputType.EMAIL,
      placeHolder: "Enter your email",
      name: "email"
    },
    {
      id: "4",
      type: InputType.DATE,
      placeHolder: "Select your birthdate",
      name: "birthdate"
    },
    {
      id: "5",
      type: InputType.SELECT,
      placeHolder: "choose your gender",
      value: "choose your gender",
      name: "gender",
      options: [
        {value: "ХУЙ"},
        {value: "ПИЗДА"},
        {value: "НЕОПРИДІЛИЛИСЬ"},
      ]
    }
  ],
  button: {
    text: "Зарееструватись",
    clickHandler: () => console.log("Registered")
  }

}

const logInData: FormProps = {
  title: "Введіть дані для входу",
  action: AUTH_USER_ROUTES.CALENDAR,
  method: Method.POST,
  inputs: [
    {
      id: "1",
      type: InputType.EMAIL,
      placeHolder: "Enter your email",
      name: "email"
    },
    {
      id: "2",
      type: InputType.PASSWORD,
      placeHolder: "Enter your password",
      name: "password",
      required: true
    }
  ],
  button: {
    text: "Увійти",
    clickHandler: () => console.log("Logged in")
  }

}




const handleAuthOptions = {
  GOOGLEAUTH: () => {
    googleSignIn()
    console.log('googleSignIn')
  },
  EMAILAUTH: (setVisible) => {
    return(
      <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisible} isOpen={true}/>
    )
    // logInWithEmailAndPassword()
    // console.log('emailAuth')
  },
  EMAILSIGNUP: (setVisible) => {
    return (
      <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisible} isOpen={true}/>
    )
    console.log('signin')
  }
}

type LoginProps = {
  closeModal: () => void;
}

const LogIn: FC<LoginProps> = ({ closeModal }) => {
  const [isOpenSignUp, setVisibleSignUp] = useState(false);
  const [isOpenLogIn, setVisibleLogIn] = useState(false);

  return (
    <div className={classes.content}>
      <h1 className={classes.contentHeader}>Chose login option</h1>
      <div className={classes.contentButtons}>
        <button 
          className={classes.contentButtonsButtonGoogle} 
          onClick={() => { handleAuthOptions.GOOGLEAUTH(); closeModal(); }}
        >
          Login by google
        </button>
        <button 
          className={classes.contentButtonsButtonEmailLogIn} 
          onClick={() => { handleAuthOptions.EMAILAUTH(setVisibleLogIn(true)); closeModal(); }}
        >
          Login by e-mail
        </button>
        <button 
          className={classes.contentButtonsButtonEmailSignUp} 
          onClick={() => { handleAuthOptions.EMAILSIGNUP(setVisibleSignUp(true)); closeModal(); } }
        >
          Signup with e-mail
        </button>
        {isOpenSignUp && <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisibleSignUp} isOpen={true} />}
        {isOpenLogIn && <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisibleLogIn} isOpen={true} />}
      </div>
    </div>
  );
}

// type LoginProps = {
//   parentModalState: boolean
// }
// const LogIn: FC<LoginProps> = ({parentModalState}) => {
//   const [parentModalVisibility, setIsOpenParentModalVisibility] = useState(parentModalState);
//   const [isOpenSignUp, setVisibleSignUp] = useState(false);
//   const [isOpenLogIn, setVisibleLogIn] = useState(false);
//   return (
//     <div className={classes.content}>
//       <h1 className={classes.contentHeader}>Chose login option</h1>
//       <div className={classes.contentButtons}>
//         <button className={classes.contentButtonsButtonGoogle} onClick={()=>{handleAuthOptions.GOOGLEAUTH, setIsOpenParentModalVisibility(!parentModalVisibility)}}>Login by google</button>
//         <button className={classes.contentButtonsButtonEmailLogIn} onClick={()=>handleAuthOptions.EMAILAUTH(setVisibleLogIn(true))}>Login by e-mail</button>
//         <button className={classes.contentButtonsButtonEmailSignUp} onClick={()=>handleAuthOptions.EMAILSIGNUP(setVisibleSignUp(true))}>Signup with e-mail</button>
//         {isOpenSignUp && <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisibleSignUp} isOpen={true}/> }
//         {isOpenLogIn && <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisibleLogIn} isOpen={true}/> }
//       </div>
//     </div>
//   );
// }

export default LogIn;

// googleSignOut()