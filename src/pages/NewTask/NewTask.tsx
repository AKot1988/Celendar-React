import { FC, useState } from "react";
import {
  BasicStaticDateTimePicker,
  UniversalForm,
  UniversalModal,
} from "../../components";
import { useParams, ActionFunctionArgs, redirect } from "react-router-dom";
import { NewTaskFormConfig, dateMapper } from "./helper";
import { auth } from "../../firebase/firebase";
import { setNewEvent } from "../../firebase/API";

export const newTaskAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newTaskData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    // begin: new Date(formData.get("begin") as string),
    // end: new Date(formData.get("end") as string),
    begin: formData.get("begin") as string,
    end: formData.get("end") as string,
    priority: formData.get("priority") as string,
    curentUser: auth.currentUser?.uid,
  };
  console.log(newTaskData);
  setNewEvent(newTaskData);

  return redirect(
    `/calendar/${formData.get("currentUser")}/${formData.get("day")}`
  );
};

const NewTask: FC = () => {
  const { currentUser, day } = useParams();
  const [visBegin, setVisBegin] = useState(false);
  const [visEnd, setVisEnd] = useState(false);
  NewTaskFormConfig.inputs[2].onFocus = () => setVisBegin(!visBegin);
  NewTaskFormConfig.inputs[3].onFocus = () => setVisEnd(!visEnd);
  return (
    <>
      <UniversalForm data={NewTaskFormConfig} />
      {visBegin && (
        <UniversalModal
          title="Set begin date/time"
          content={
            <BasicStaticDateTimePicker
              initDate={new Date(dateMapper(day as string))}
              onAccept={(val) => {
                if(val){
                  const date = new Date(val.toString())
                  NewTaskFormConfig.inputs[2].value = date;
                } else {throw new Error("Invalid date")}
                setVisBegin(!visBegin);
              }}
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
              onAccept={(val) => {
                if(val){
                  const date = new Date(val.toString())
                  NewTaskFormConfig.inputs[3].value = date;
                } else {throw new Error("Invalid date")}
                setVisEnd(!visEnd);
              }}
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
