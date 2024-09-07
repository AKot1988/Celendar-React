import { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { NewEventData } from "../../firebase/types";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import Calendar from "react-calendar";
import { dateUniMapper, dayTaskColor } from "./helper";
import classes from "./Calendar.module.scss";
import "react-calendar/dist/Calendar.css";

const CalendarPage: FC = () => {
  const navigate = useNavigate();
  const userEvents: NewEventData[] = useLoaderData();

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        onClickDay={(value, event) => {
          console.log(value);
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
                    backgroundColor: dayTaskColor(ev.priority),
                    borderRadius: "3px",
                    margin: "1px",
                  }}
                ></div>
              ))}
          </>
        )}
      />
    </div>
  );
};

export default CalendarPage;
