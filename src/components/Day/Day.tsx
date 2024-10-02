import { FC, useEffect, useState } from "react";
import { UniversalModal, Task } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { dateToDisplay, DayDataProps, dateMapper, MSVG } from "./helper";
import { deleteEventAction } from "../../firebase/API";
import { AddButton } from "../index.tsx";
import { dayTaskColor } from "../../pages/Calendar/helper";
import {
  textAnimation,
  rotateSVGs,
} from "../../components/Animations/Animations";
import classes from "./Day.module.scss";
import { NewEventData } from "../../firebase/types.tsx";

import { motion } from "framer-motion";

let extendedTask: DayDataProps;

const Day: FC<{ content: DayDataProps[] }> = ({ content }) => {
  const [visibleExtendedTask, setVisibleExtendedTask] = useState(false);
  const navigate = useNavigate();
  const { currentUser, day } = useParams();
  content.sort((a, b) => {
    const dateA = new Date(a.begin);
    const dateB = new Date(b.begin);
    return dateA.getTime() - dateB.getTime();
  });

  return content.length > 0 ? (
    <>
      <div className={classes.day}>
        <div>
          <AddButton
            type="link"
            to={`${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/newTask`}
          />
          <h2>{`Задачі на ${dateMapper(day as string)}`}</h2>
        </div>
        <div className={classes.dayWrapper}>
          {content.map((item: DayDataProps) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className={classes.dayItem}
              style={{
                background: dayTaskColor(item.priority),
              }}
              onClick={() => {
                setVisibleExtendedTask(!visibleExtendedTask);
                extendedTask = item;

              }}
            >
              {/* {visibleExtendedTask && (
                <UniversalModal
                  content={<Task {...extendedTask} />}
                  title={"Деталі задачі"}
                  setVisible={setVisibleExtendedTask}
                  visible={visibleExtendedTask}
                />
              )} */}
              <motion.h3 custom={1} variants={textAnimation}>
                {item.title}
              </motion.h3>
              <motion.p
                custom={2}
                variants={textAnimation}
              >{`Початок:  ${dateToDisplay(item.begin)}`}</motion.p>

              <motion.p custom={3} variants={textAnimation}>
                {item.priority}
              </motion.p>
              <div className={classes.dayEditToolsContainer}>
                <MSVG
                  custom={4}
                  variants={rotateSVGs}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    navigate(
                      `${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/${item.id}/edit`
                    );
                  }}
                  className={classes.dayEditTools}
                  type="edit"
                />
                <MSVG
                  custom={1}
                  variants={rotateSVGs}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    const confirmation = confirm(`"Видалити " ${item.title}`);
                    if (confirmation) {
                      deleteEventAction(item as NewEventData);
                    }
                    navigate(
                      `${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}`
                    );
                  }}
                  className={classes.dayEditTools}
                  type="trash"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {visibleExtendedTask && (
                <UniversalModal
                  content={<Task {...extendedTask} />}
                  title={"Деталі задачі"}
                  setVisible={setVisibleExtendedTask}
                  visible={visibleExtendedTask}
                />
              )}
      </div>
    </>
  ) : (
    <>
      <AddButton
        type="link"
        to={`${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/newTask`}
      />
      <p>На цей день задачі відсутні</p>
    </>
  );
};

export default Day;
