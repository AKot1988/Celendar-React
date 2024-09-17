import { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { NewEventData } from "../../firebase/types";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { textAnimation, calendarAnimation } from "../../components/Animations/Animations.tsx";
import { dateUniMapper, dayTaskColor } from "./helper";
import "react-calendar/dist/Calendar.css";
import classes from "./Calendar.module.scss";

const CalendarPage: FC = () => {
  const navigate = useNavigate();
  const userEvents = useLoaderData() as NewEventData[];

  return (
    <motion.div initial="hidden" whileInView="visible" className={classes.calendarPage}>
      <motion.h1 custom={1.5} variants={textAnimation}>My calendar</motion.h1>
      <motion.div custom={1} variants={calendarAnimation} className={classes.calendarWrapper}>

      <Calendar
        onClickDay={(value) => {
          const dayURL = dateUniMapper(value);
          navigate(
            `${AUTH_USER_ROUTES.CALENDAR}/${auth.currentUser?.uid}/${dayURL}`
          );
        }}
        className={classes.calendarWrapper}
        tileClassName={classes.calendarTile}
        tileContent={({ date, view }) => (
          <>
            {userEvents
              .filter(
                (event: NewEventData) =>
                  dateUniMapper(event.begin) === dateUniMapper(date)
              )
              .map((ev: NewEventData, index: number) => (
                <div
                  key={`${index}+${ev.title}`}
                  style={{
                    width: "90%",
                    height: "6px",
                    background: dayTaskColor(ev.priority),
                    borderRadius: "3px",
                    margin: "1px",
                  }}
                ></div>
              ))}
          </>
        )}
      />
      </motion.div>
    </motion.div>
  );
};

export default CalendarPage;
