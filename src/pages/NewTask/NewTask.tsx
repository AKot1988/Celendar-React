import { FC, useState } from "react";
import {
  BasicStaticDateTimePicker,
  UniversalForm,
  UniversalModal,
} from "../../components";
import { FormProps } from "../../components/UniversalForm/types";
import { useParams, ActionFunctionArgs, redirect } from "react-router-dom";
import { NewTaskFormData } from "./helper";
import { auth } from "../../firebase/firebase";

export const newTaskAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newTaskData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    begin: formData.get("begin") as string,
    curentUser: "",
  };
  // newTaskData.currentUser = auth.currentUser?.uid;
  console.log(newTaskData);
  // тут повинен бути виклик фунції фаерБасе, яка покладе нову таску в базу

  return redirect(
    `/calendar/${formData.get("currentUser")}/${formData.get("day")}`
  );
};

const NewTask: FC = () => {
  // const { currentUser, day } = useParams();
  const [vis, setVis] = useState(false);
  NewTaskFormData.inputs[2].onFocus = () => setVis(!vis);
  return (
    <>
      <UniversalForm data={NewTaskFormData} />
      {vis && (
        <UniversalModal
          title="Set begin date/time"
          content={
            <BasicStaticDateTimePicker
              onAccept={(val) => {console.log(val), setVis(setVis)}}
              initDate="August 23, 2024"
            />
          }
          visible={vis}
          setVisible={setVis}
        />
      )}
    </>
  );
};

export default NewTask;
