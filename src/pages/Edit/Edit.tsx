import {FC } from 'react';
import { useLoaderData, useParams, redirect, ActionFunctionArgs, } from 'react-router-dom';
import { auth } from "../../firebase/firebase";
import { UniversalForm } from '../../components/index.tsx';
import { editEventAction, getEventsByUserDayId } from '../../firebase/API';
import { NewEventData, PRIORITY } from '../../firebase/types.tsx';
import { EditTaskFormConfig } from './helper.tsx';

import classes from './Edit.module.scss';
import { Update } from '@mui/icons-material';

export const EditAction = async function ({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const editedTaskData: NewEventData = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        begin: formData.get("begin") as string,
        end: formData.get("end") as string,
        priority: formData.get("priority") as PRIORITY | undefined,
        owner: auth.currentUser?.uid,
        id: formData.get("id") as string
    };

    await editEventAction(editedTaskData);
    return redirect(
        `/calendar/${formData.get("currentUser")}/${formData.get("day")}`
    );
}

const Edit: FC = () => {
  const data = useLoaderData() as NewEventData;
  const dataKeys = Object.keys(data);
  const UpdatedFormInputsProps = EditTaskFormConfig.inputs.map((input) => {
    if (dataKeys.includes(input.name)) {
      input.value = data[input.name];
    }
    return input;
  })
    let UpdatedFormProps = EditTaskFormConfig
    UpdatedFormProps.inputs = UpdatedFormInputsProps

  return (
    <div className={classes.edit}>
      <UniversalForm data={UpdatedFormProps}/>
    </div>
  );
};

export default Edit;