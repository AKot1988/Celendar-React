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
    photoURL: formData.get("photoURL") as string,
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
  const [config, setUpdatedData] = useState(EditTaskFormConfig);

  const data = useLoaderData() as NewEventData;

  useEffect(() => {
    const updatedConfig = { ...config };
    const dataKeys = Object.keys(data);
    updatedConfig.inputs.forEach((input) => {
      if (dataKeys.includes(input.name)) {
        input.value = data[input.name as keyof NewEventData] as string;
      }
    });
    updatedConfig.inputs[2].onFocus = () =>
      setBeginModalState(!beginModalState);
    updatedConfig.inputs[3].onFocus = () => setEndModalState(!endModalState);
    setUpdatedData(updatedConfig);
  }, []);

  return (
    <div className={classes.edit}>
      <UniversalForm data={config} />
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
            onCancel={() => setBeginModalState(!beginModalState)}
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
            onCancel={() => setEndModalState(!endModalState)}
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
