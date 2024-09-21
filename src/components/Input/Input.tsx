import { FC, useState, useEffect } from "react";
import { auth } from '../../firebase/firebase'
import { InputType, InputElementProps } from "../Input/type";
import classes from "./Input.module.scss";
import { addFileToStorage } from "../../firebase/API";

const Input: FC<InputElementProps> = ({
  type,
  placeHolder,
  name,
  required,
  id,
  options = [],
  value,
  label,
  onFocus = () => {},
  onChange = () => {},
}: InputElementProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [valueData, setValueData] = useState<string | number | undefined>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    let newValue: string;
    switch (type) {
      case InputType.FILE: {
        newValue = (e.target as HTMLInputElement).value;
        console.dir(e.target);
        addFileToStorage({element: e.target as HTMLInputElement, userId: auth.currentUser?.uid});
        break;
      }
      case InputType.DATEPICKER: {
        newValue = value;
        break;
      }
      default: {
        newValue = (e.target as HTMLInputElement).value;
      }
    }

    setErrorMessage(validation(type, newValue));
    setValueData(newValue);
  };

  // const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   let newValue: string;
  //   type === InputType.DATEPICKER
  //     ? (newValue = value)
  //     : (newValue = (e.target as HTMLInputElement).value);
  //   setErrorMessage(validation(type, newValue));
  //   setValueData(newValue);
  // };

  useEffect(() => {
    setValueData(value);
  }, [value]);

  switch (type) {
    case InputType.SELECT:
      return (
        <label className={classes.inputContainer}>
          <span className={classes.inputLabel}>{label}</span>
          <p className={classes.error}>{errorMessage}</p>
          <select name={name} className={classes.inputItem} required={required}>
            <option className={classes.inputItem} disabled value={value}>
              {placeHolder}
            </option>
            {options.map((option) => (
              <option
                key={`${id}${option.value}`}
                className={classes.inputItem}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>
      );
    case InputType.DATEPICKER:
      return (
        <label className={classes.inputContainer}>
          <span className={classes.inputLabel}>{label}</span>
          <p className={classes.error}>{errorMessage}</p>
          <input
            onFocus={onFocus}
            type={type}
            placeholder={placeHolder}
            name={name}
            className={classes.inputItem}
            required={required}
            value={valueData}
            onInput={handleOnChange}
            autoComplete="off"
          />
        </label>
      );
      case InputType.FILE:
        return (
          <label className={classes.inputContainer}>
            <span className={classes.inputLabel}>{label}</span>
            <p className={classes.error}>{errorMessage}</p>
            <input
              onChange={handleOnChange}
              type={type}
              placeholder={placeHolder}
              name={name}
              className={classes.inputItem}
              required={required}
              value={valueData}
              // onInput={handleOnChange}
              autoComplete="off"
            />
          </label>
        );
    default:
      return (
        <label className={classes.inputContainer}>
          <span className={classes.inputLabel}>{label}</span>
          <p className={classes.error}>{errorMessage}</p>
          <input
            type={type}
            placeholder={placeHolder}
            name={name}
            className={classes.inputItem}
            required={required}
            value={valueData}
            onInput={handleOnChange}
          />
        </label>
      );
  }
};
export default Input;

const validation = (type: InputType, value: string): string => {
  switch (type) {
    case InputType.TEXT:
      return value.length <= 3 ? "Введіть більше 3-x символів" : "";
    case InputType.TEXTAREA:
      return value.length <= 3 ? "Введіть більше 3-x символів" : "";
    case InputType.PASSWORD:
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return !passwordRegexp.test(value) ? "min 4 букви та 4 цифри" : "";
    case InputType.EMAIL:
      const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailRegexp.test(value) ? "невірний формат" : "";
    case InputType.DATE:
      const dateRegexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return !dateRegexp.test(value) ? "невірний формат" : "";
    case InputType.SELECT:
      return value === "" ? "оберіть опцію" : "";
    default:
      return "";
  }
};
