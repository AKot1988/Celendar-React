import {
  googleSignIn,
  googleSignOut,
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from '../../firebase/auth';
import { Method, FormProps } from '../../components/UniversalForm/types';
import { InputType, FormType } from '../../components/Input/type';
import { AUTH_USER_ROUTES, COMMON_ROUTES } from '../../router/routesNames';

export type LoginProps = {
  closeModal: () => void;
};

export const newUserFormData: FormProps = {
  title: 'Новий користувач',
  action: COMMON_ROUTES.LOGIN,
  method: Method.POST,
  inputs: [
    {
      id: '1',
      type: InputType.TEXT,
      placeHolder: 'Enter your username',
      name: 'name',
    },
    {
      id: '2',
      type: InputType.PASSWORD,
      placeHolder: 'Enter your password',
      name: 'password',
      required: true,
    },
    {
      id: '3',
      type: InputType.EMAIL,
      placeHolder: 'Enter your email',
      name: 'email',
    },
    {
      id: '4',
      type: InputType.DATE,
      placeHolder: 'Select your birthdate',
      name: 'birthdate',
    },
    {
      id: '5',
      type: InputType.SELECT,
      placeHolder: 'Оберіть стать',
      value: 'Оберіть стать',
      name: 'gender',
      options: [
        {
          value: 'Чоловік',
          label: 'Чоловік',
        },
        {
          value: 'Жінка',
          label: 'Жінка',
        },
        {
          value: 'Неоприділився',
          label: 'Неоприділився',
        },
      ],
    },
    {
      id: '6',
      type: InputType.HIDDEN,
      value: FormType.SIGNUP,
      name: 'formType',
    },
  ],
  button: {
    text: 'Зарееструватись',
    clickHandler: () => {},
  },
};

export const logInData: FormProps = {
  title: 'Введіть дані для входу',
  action: COMMON_ROUTES.LOGIN,
  method: Method.POST,
  inputs: [
    {
      id: '1',
      type: InputType.EMAIL,
      placeHolder: 'Enter your email',
      name: 'email',
    },
    {
      id: '2',
      type: InputType.PASSWORD,
      placeHolder: 'Enter your password',
      name: 'password',
      required: true,
    },
    {
      id: '3',
      type: InputType.HIDDEN,
      value: FormType.LOGIN,
      name: 'formType',
    },
  ],
  button: {
    text: 'Увійти',
    clickHandler: () => {},
  },
};
