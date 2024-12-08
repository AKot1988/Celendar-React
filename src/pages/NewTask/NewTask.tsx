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
import { NewEventData, PRIORITY } from "../../firebase/types";
import { dateUniMapper } from "../Calendar/helper";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations";
import classes from "./NewTask.module.scss";

export const newTaskAction = async function ({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newTaskData: NewEventData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    begin: formData.get("begin") as string,
    end: formData.get("end") as string,
    priority: formData.get("priority") as PRIORITY | undefined,
    owner: auth.currentUser?.uid,
    id: (Date.now().toString(36) + Math.random().toString(36)) as string,
    photoURL: formData.get("photo") as string,
  };
  setNewEvent(newTaskData);
  return redirect(
    `/calendar/${newTaskData.owner}/${dateUniMapper(newTaskData.begin)}`
  );
};

const NewTask: FC = () => {
  const { day } = useParams();
  const [visBegin, setVisBegin] = useState(false);
  const [visEnd, setVisEnd] = useState(false);
  NewTaskFormConfig.inputs[2].onFocus = () => setVisBegin(!visBegin);
  NewTaskFormConfig.inputs[3].onFocus = () => setVisEnd(!visEnd);
  return (
    <div className={classes.newTaskWrapper}>
      <motion.div initial="hidden" whileInView="visible" custom={2} variants={textAnimation}>
        <UniversalForm data={NewTaskFormConfig} />
        {visBegin && (
          <UniversalModal
            title="Set begin date/time"
            content={
              <BasicStaticDateTimePicker
                initDate={new Date(dateMapper(day as string))}
                onAccept={(val) => {
                  if (val) {
                    const date = new Date(val.toString());
                    NewTaskFormConfig.inputs[2].value = date;
                  } else {
                    throw new Error("Invalid date");
                  }
                  setVisBegin(!visBegin);
                }}
                onCancel={() => setVisBegin(!visBegin)}
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
                  if (val) {
                    const date = new Date(val.toString());
                    NewTaskFormConfig.inputs[3].value = date;
                  } else {
                    throw new Error("Invalid date");
                  }
                  setVisEnd(!visEnd);
                }}
                onCancel={() => setVisEnd(!visEnd)}
                initDate={new Date(dateMapper(day as string))}
              />
            }
            visible={visEnd}
            setVisible={setVisEnd}
          />
        )}
      </motion.div>
    </div>
  );
};

export default NewTask;
