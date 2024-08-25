import { FC, useState } from "react";
import { BasicStaticDateTimePicker, UniversalForm } from "../../components";
import { FormProps } from "../../components/UniversalForm/types";
import { useParams, ActionFunctionArgs, redirect } from 'react-router-dom'
import { NewTaskFormData } from "./helper";
import { auth } from "../../firebase/firebase";

export const newTaskAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newTaskData = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    begin: formData.get('begin') as string,
    curentUser: '',
  }
  newTaskData.currentUser = auth.currentUser?.uid;
  console.log(newTaskData);
  // тут повинен бути виклик фунції фаерБасе, яка покладе нову таску в базу

  return redirect(`/calendar/${formData.get('currentUser')}/${formData.get('day')}`);
}

const NewTask: FC = () => {
  const { currentUser, day } = useParams();
  return (
    <>
      <UniversalForm data={NewTaskFormData} />
    </>
  );
};

export default NewTask;
