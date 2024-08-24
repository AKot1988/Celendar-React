import { FC, useState } from "react";
import {
  useLoaderData,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  BasicDateDayCalendar,
  BasicDateRangeCalendar,
  BasicStaticDateTimePicker,
} from "../../components";
import { checkDoesUserHaveEvents, getEventsByUser } from "../../firebase/API";
import { UniversalModal, Day } from "../../components/";
import { DatePattern, MOUNTHS } from "../../firebase/types";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import Calendar from "react-calendar";
import classes from "./Calendar.module.scss";
import "react-calendar/dist/Calendar.css";


const CalendarPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        onClickDay={(value, event) => {
          const dayURL = value.toString().split(" ").splice(1, 3).join("_");
          const currentDayDatePatern: DatePattern = {
            year: dayURL?.split("_")[2] as string,
            mounth: dayURL?.split("_")[0] as MOUNTHS,
            day: dayURL?.split("_")[1] as string,
          };
          navigate(
            `${AUTH_USER_ROUTES.CALENDAR}/${auth.currentUser?.uid}/${dayURL}`
          );
        }}
        className={classes.calendarWrapper}
        tileClassName={classes.calendarTile}
        tileContent={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? (
            <div style={{ backgroundColor: "red" }}>It's Sunday!</div>
          ) : null
        }
      />
    </div>
  );
};

export default CalendarPage;
