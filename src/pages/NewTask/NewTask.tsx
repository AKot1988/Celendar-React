import { FC, useState } from "react";
import {
  BasicStaticDateTimePicker,
  UniversalForm,
  UniversalModal,
} from "../../components";
import { FormProps } from "../../components/UniversalForm/types";
import { useParams, ActionFunctionArgs, redirect } from "react-router-dom";
import { NewTaskFormData, dateMapper } from "./helper";
import { auth } from "../../firebase/firebase";
import { setNewEvent } from "../../firebase/API";

export const newTaskAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newTaskData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    begin: formData.get("begin") as string,
    end: formData.get("end") as string,
    priority: formData.get("priority") as string,
    curentUser: auth.currentUser?.uid,
  };
  console.log(newTaskData);
  // setNewEvent(newTaskData);

  return redirect(
    `/calendar/${formData.get("currentUser")}/${formData.get("day")}`
  );
};

const NewTask: FC = () => {
  const { currentUser, day } = useParams();
  const newInitDate = new Date(dateMapper(day as string));
  console.log(newInitDate);
  const [visBegin, setVisBegin] = useState(false);
  const [visEnd, setVisEnd] = useState(false);
  NewTaskFormData.inputs[2].onFocus = () => setVisBegin(!visBegin);
  NewTaskFormData.inputs[3].onFocus = () => setVisEnd(!visEnd);
  return (
    <>
      <UniversalForm data={NewTaskFormData} />
      {visBegin && (
        <UniversalModal
          title="Set begin date/time"
          content={
            <BasicStaticDateTimePicker
              onAccept={(val) => {setVisBegin(!visBegin),
                NewTaskFormData.inputs[2].value = visBegin.toString()
              }
            }
              initDate={new Date(dateMapper(day as string))}
            />
          }
          visible={visBegin}
          setVisible={setVisBegin}
        />
      )}
      {visEnd && (
        <UniversalModal
          title="Set begin date/time"
          content={
            <BasicStaticDateTimePicker
              onAccept={(val) => {setVisEnd(!visEnd)}}
              initDate={new Date(dateMapper(day as string))}
            />
          }
          visible={visEnd}
          setVisible={setVisEnd}
        />
      )}
    </>
  );
};

export default NewTask;
