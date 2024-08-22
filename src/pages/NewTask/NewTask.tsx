import { FC, useState } from "react";
import { UniversalForm } from "../../components";
import { FormProps } from "../../components/UniversalForm/types";
import { useParams } from 'react-router-dom'
import { NewTaskFormData } from "./helper";

const NewTask: FC = () => {
  const { currentUser, day } = useParams();
  console.log(currentUser, day);
  return (
    <>
      <UniversalForm data={NewTaskFormData} />
    </>
  );
};

export default NewTask;
