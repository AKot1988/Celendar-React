import { FC, useState } from "react";
import { UniversalForm } from "../../components";
import { FormProps } from "../../components/UniversalForm/types";
import { NewTaskFormData } from "./helper";

const NewTask: FC = () => {
  return (
    <>
      <UniversalForm data={NewTaskFormData} />
    </>
  );
};

export default NewTask;
