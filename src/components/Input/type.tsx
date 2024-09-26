import { FormEvent } from "react";
import { imageDestination } from "../../firebase/types";

export enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  DATE = "date",
  DATEPICKER = "datepicker",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  FILE = "file",
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
  SELECT = "select",
  HIDDEN = "hidden",
  TIME = "time",
}

export type SelectOption = {
  label: string;
  value: string;
};

export enum FormType {
  SIGNUP = "signUp",
  LOGIN = "logIn",
}

export type InputElementProps = {
  id: string;
  type: InputType;
  placeHolder?: string;
  name: string;
  required?: boolean | undefined;
  options?: SelectOption[];
  value?: string | FormType.LOGIN | FormType.SIGNUP | Date | undefined | number;
  label?: string;
  autoComplete?: string;
  className?: string;
  onFocus?: () => void;
  onChange?: (ev: Event | FormEvent<HTMLInputElement>) => void;
  imagePurpose?: imageDestination;
};
