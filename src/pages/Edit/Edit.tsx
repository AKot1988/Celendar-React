import { FC, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useLoaderData, redirect, ActionFunctionArgs } from "react-router-dom";
import {
  BasicStaticDateTimePicker,
  UniversalForm,
  UniversalModal,
} from "../../components";
import { editEventAction } from "../../firebase/API";
import { NewEventData, PRIORITY } from "../../firebase/types.tsx";
import { EditTaskFormConfig } from "./helper.tsx";
import classes from "./Edit.module.scss";
import { dateUniMapper } from "../Calendar/helper";

export const EditAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const editedTaskData: NewEventData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    begin: formData.get("begin") as string,
    end: formData.get("end") as string,
    priority: formData.get("priority") as PRIORITY | undefined,
    owner: auth.currentUser?.uid,
    id: formData.get("id") as string,
    photoURL: formData.get("photo") as string,
  };
  console.log(editedTaskData);

  await editEventAction(editedTaskData);

  return redirect(
    `/calendar/${editedTaskData.owner}/${dateUniMapper(editedTaskData.begin)}`
  );
};

const Edit: FC = () => {
  const [beginModalState, setBeginModalState] = useState(false);
  const [endModalState, setEndModalState] = useState(false);

  const data = useLoaderData() as NewEventData;

  useEffect(() => {
    const dataKeys = Object.keys(data);
    EditTaskFormConfig.inputs.forEach((input) => {
      if (dataKeys.includes(input.name)) {
        input.value = data[input.name];
      }
    });
  }, []);
  EditTaskFormConfig.inputs[2].onFocus = () =>
    setBeginModalState(!beginModalState);
  EditTaskFormConfig.inputs[3].onFocus = () => setEndModalState(!endModalState);

  return (
    <div className={classes.edit}>
      <UniversalForm data={EditTaskFormConfig} />
      <UniversalModal
        title={"Початок"}
        content={
          <BasicStaticDateTimePicker
            initDate={new Date(data.begin)}
            onAccept={(value) => {
              if (value) {
                const dateBegin = new Date(value.toString());
                EditTaskFormConfig.inputs[2].value = dateBegin;
              }
              setBeginModalState(!beginModalState);
            }}
          />
        }
        visible={beginModalState}
        setVisible={setBeginModalState}
      />
      <UniversalModal
        title={"Кінець"}
        content={
          <BasicStaticDateTimePicker
            onAccept={(value) => {
              if (value) {
                const dateEnd = new Date(value.toString());
                EditTaskFormConfig.inputs[3].value = dateEnd;
              }
              setEndModalState(!endModalState);
            }}
            initDate={new Date(data.end)}
          />
        }
        visible={endModalState}
        setVisible={setEndModalState}
      />
    </div>
  );
};

export default Edit;
