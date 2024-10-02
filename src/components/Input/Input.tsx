import { FC, useState, useEffect } from "react";
import { InputType, InputElementProps } from "../Input/type";
import classes from "./Input.module.scss";

// import { auth } from "../../firebase/firebase";
// import { addFileToStorage } from "../../firebase/API";
// import { imageDestination } from "../../firebase/types";

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
  onChange = () => '',
  imagePurpose,
}: InputElementProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(
    null
  );
  const [valueData, setValueData] = useState<string | number | undefined>("");

  const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) => {
    let newValue: string | undefined;
    switch (type) {
      case InputType.FILE: {
        if (!imagePurpose) {
          throw new Error("imagePurpose is required for file input");
        }
        newValue = await onChange(e);
        break;
      }
      case InputType.DATEPICKER: {
        newValue = value as string;
        break;
      }
      default: {
        newValue = (e.target as HTMLInputElement).value;
        break
      }
    }
    setErrorMessage(validation(type, newValue as string));
    setValueData(newValue);
  };

  useEffect(() => {
    setValueData(value as string);
  }, [value]);

  switch (type) {
    case InputType.FILE:
      return (
        <label className={classes.inputContainer}>
          <span className={classes.inputLabel}>{label}</span>
          <p className={classes.error}>{errorMessage}</p>
          <input
            onChange={handleOnChange}
            type={type}
            placeholder={placeHolder}
            className={classes.inputItem}
            required={required}
            autoComplete="off"
          />
          <input type="hidden" name={name} value={valueData} />
        </label>
      );
    case InputType.SELECT:
      return (
        <label className={classes.inputContainer}>
          <span className={classes.inputLabel}>{label}</span>
          <p className={classes.error}>{errorMessage}</p>
          <select name={name} className={classes.inputItem} required={required}>
            <option className={classes.inputItem} disabled value={valueData}>
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

const validation = (type: InputType, value: string): string | undefined => {
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
