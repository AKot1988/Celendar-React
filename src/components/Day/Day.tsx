import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { dateToDisplay, DayDataProps, dateMapper, MSVG } from "./helper";
import { deleteEventAction } from "../../firebase/API";
import { AddButton } from "../index.tsx";
import { dayTaskColor } from "../../pages/Calendar/helper";
import classes from "./Day.module.scss";
import { NewEventData } from "../../firebase/types.tsx";

import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom: number) => ({
    transition: { delay: custom * 0.2 },
    opacity: 1,
    x: 0,
  }),
};

const rotateSVGs = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  whileHover: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
  whileTap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%",
  },
};

const Day: FC<{ content: DayDataProps[] }> = ({ content }) => {
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
                console.log("open page with extended info");
              }}
            >
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
                  custom={4}
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
