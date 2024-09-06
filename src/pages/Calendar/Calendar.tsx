import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import Calendar from "react-calendar";
import { dateUniMapper } from "./helper";
import classes from "./Calendar.module.scss";
import "react-calendar/dist/Calendar.css";

const CalendarPage: FC = () => {
  const navigate = useNavigate();

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
        tileContent={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? (
            console.log(date),
            <div
              style={{
                color: "red",
                width: "90%",
                height: "5px",
                backgroundColor: "red",
                borderRadius: "2px",
              }}
            />
          ) : null
        }
      />
    </div>
  );
};

export default CalendarPage;
