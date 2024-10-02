import { Method, FormProps } from "../../components/UniversalForm/types";
import { InputType, FormType } from "../../components/Input/type";
import { COMMON_ROUTES } from "../../router/routesNames";

export type LoginProps = {
  closeModal: () => void;
};

export const newUserFormData: FormProps = {
  title: "Новий користувач",
  action: COMMON_ROUTES.LOGIN,
  method: Method.POST,
  inputs: [
    { 
      id: "name",
      label: "Name",
      type: InputType.TEXT,
      placeHolder: "Enter your username",
      name: "name",
      value: "",
      required: true,
      onChange: () => {},
    },
    {
      id: "password",
      label: "Password",
      type: InputType.PASSWORD,
      placeHolder: "Enter your password",
      name: "password",
      value: "",
      required: true,
      onChange: () => {},
    },
    {
      id: "email",
      label: "E-mail",
      type: InputType.EMAIL,
      placeHolder: "Enter your email",
      name: "email",
      required: true,
      onChange: () => {},
    },
    {
      id: "birthdate",
      label: "Birthdate",
      type: InputType.DATE,
      placeHolder: "Select your birthdate",
      name: "birthdate",
      value: "",
      required: true,
      onChange: () => {},
    },
    {
      id: "about",
      label: "Smth about yourself",
      type: InputType.TEXTAREA,
      placeHolder: "leave smth about yourself",
      name: "about",
      value: "",
      required: true,
      onChange: () => {},
    },
    {
      id: "gender",
      label: "Gender",
      type: InputType.SELECT,
      placeHolder: "Оберіть стать",
      value: "Оберіть стать",
      name: "gender",
      options: [
        {
          value: "Чоловік",
          label: "Чоловік",
        },
        {
          value: "Жінка",
          label: "Жінка",
        },
        {
          value: "Неоприділився",
          label: "Неоприділився",
        },
      ],
    },
    {
      id: "file",
      label: "Add your photo",
      type: InputType.FILE,
      placeHolder: "tap to add photo",
      name: "photo",
      value: "",
      required: false,
      onChange: () => {},
    },
    {
      id: "formType",
      type: InputType.HIDDEN,
      value: FormType.SIGNUP,
      name: "formType",
    },
  ],
  button: {
    text: "Зарееструватись",
  },
};

export const logInData: FormProps = {
  title: "Введіть дані для входу",
  action: COMMON_ROUTES.LOGIN,
  method: Method.POST,
  inputs: [
    {
      id: "email",
      type: InputType.EMAIL,
      placeHolder: "Enter your email",
      name: "email",
    },
    {
      id: "password",
      type: InputType.PASSWORD,
      placeHolder: "Enter your password",
      name: "password",
      required: true,
    },
    {
      id: "formType",
      type: InputType.HIDDEN,
      value: FormType.LOGIN,
      name: "formType",
    },
  ],
  button: {
    text: "Увійти",
  },
};
