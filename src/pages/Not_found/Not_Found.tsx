import { FC } from "react";
import { useRouteError } from "react-router-dom";

const Not_Found: FC = () => {
  const error = useRouteError();
  return (
    <>
      <h1>wrong rout</h1>
      <p>{error.statusText ?? error.message}</p>
    </>
  );
}

export default Not_Found;