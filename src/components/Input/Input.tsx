import { FC, useState } from 'react';
import { InputType, InputElementProps } from '../Input/type';
import classes from './Input.module.scss';

const Input: FC<InputElementProps> = ({
  type,
  placeHolder,
  name,
  required,
  id,
  options = [],
  value,
  label,
}: InputElementProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = (e.target as HTMLInputElement).value;
    setErrorMessage(validation(type, newValue));
  };

  return (
    <label className={classes.inputContainer}>
      {<span className={classes.inputLabel}>{label}</span>}
      <p className={classes.error}>{errorMessage}</p>
      {type === InputType.SELECT ? (
        <select name={name} className={classes.inputItem} required={required}>
          <option className={classes.inputItem} disabled value={value}>
            {placeHolder}
          </option>
          {options.map((option) => (
            <option
              key={`${id}${option.value}`}
              className={classes.inputItem}
              value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeHolder}
          name={name}
          onInput={(ev) => handleOnChange(ev)}
          className={classes.inputItem}
          required={required}
          value={value}
        />
      )}
    </label>
  );
};
export default Input;

const validation = (type: InputType, value: string): string => {
  switch (type) {
    case InputType.TEXT:
      return value.length <= 3 ? 'Введіть більше 3-х символів' : '';
    case InputType.PASSWORD:
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return !passwordRegexp.test(value) ? 'min 4 букви та 4 цифри' : '';
    case InputType.EMAIL:
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailRegexp.test(value) ? 'невірний формат' : '';
    case InputType.DATE:
      const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return !dateRegexp.test(value) ? 'невірний формат' : '';
    case InputType.SELECT:
      return value === '' ? 'оберіть опцію' : '';
    default:
      return '';
  }
};
