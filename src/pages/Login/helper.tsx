import { googleSignIn, googleSignOut, logInWithEmailAndPassword, signUpWithEmailAndPassword } from '../../firebase/auth';
import { Method, FormProps } from '../../components/UniversalForm/types';
import { InputType } from '../../components/Input/type';
import { UniversalModal, UniversalForm } from "../../components";
import { AUTH_USER_ROUTES, COMMON_ROUTES } from '../../router/routesNames';


export type LoginProps = {
  closeModal: () => void;
}

export const newUserFormData: FormProps = {
  title: "Новий користувач",
  action: COMMON_ROUTES.LOGIN,
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
      placeHolder: "Оберіть стать",
      value: "Оберіть стать",
      name: "gender",
      options: [
        {value: "Буратіно"},
        {value: "Мальвіна"},
        {value: "Неоприділився"},
      ]
    }
  ],
  button: {
    text: "Зарееструватись",
    clickHandler: () => console.log('Submit button clicked')
  }

}

export const logInData: FormProps = {
  title: "Введіть дані для входу",
  action: COMMON_ROUTES.LOGIN,
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
    clickHandler: () => console.log("Submit button clicked")
  }

}

export const handleAuthOptions = {
  GOOGLEAUTH: () => {
    googleSignIn()
  },
  EMAILAUTH: (setVisible) => {
    return(
      <UniversalModal content={<UniversalForm data={logInData} />} setVisible={setVisible} isOpen={true}/>
    )
  },
  EMAILSIGNUP: (setVisible) => {
    return (
      <UniversalModal content={<UniversalForm data={newUserFormData} />} setVisible={setVisible} isOpen={true}/>
    )
    console.log('signin')
  }
}