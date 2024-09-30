import { FC } from "react";
import { useRouteError } from "react-router-dom";
import classes from "./Not_Found.module.scss";

const Not_Found: FC = () => {
  const error = useRouteError();
  return (
    <div className={classes.container}>
      <h1>Smth gone wrong</h1>
      <p>{error.statusText ?? error.message}</p>
    </div>
  );
}

export default Not_Found;