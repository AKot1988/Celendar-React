import { FC } from "react";
import classes from "./Loader.module.scss";

const Loader: FC = () => {
  // debugger
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <img src="../../../public/fill-color.gif" alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
