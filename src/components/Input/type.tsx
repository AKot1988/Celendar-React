export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  FILE = 'file',
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
  SELECT = 'select',
  HIDDEN = 'hidden',
}

export type SelectOption = {
  label: string;
  value: string;
}

export enum FormType {
  SIGNUP = 'signUp',
  LOGIN = 'logIn',
}

export type InputElementProps = {
  id: string;
  type: InputType;
  placeHolder?: string;
  name: string;
  required?: boolean | undefined;
  options?: SelectOption[];
  onChange?: () => void;
  value?: string | FormType.LOGIN | FormType.SIGNUP;
  label?: string;
}