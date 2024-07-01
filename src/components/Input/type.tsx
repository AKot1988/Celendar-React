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
  SELECT = 'select'
}

export type SelectOption = {
  value: string;
}

export type InputElementProps = {
  id: string;
  type: InputType;
  placeHolder?: string;
  name: string;
  required?: boolean | undefined;
  options?: SelectOption[];
  onChange?: () => void;
  value?: string;
  label?: string;
}