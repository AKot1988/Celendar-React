import { FC } from "react";
import { useRouteError } from "react-router-dom";
import classes from "./Not_Found.module.scss";

const Not_Found: FC = () => {
  const error = useRouteError() as Error;
  return (
    <div className={classes.container}>
      <h3>Smth gone wrong</h3>
      <p>{error.message}</p>
    </div>
  );
};

export default Not_Found;
