import { FC, useState } from "react";
import { useLoaderData, useParams, useNavigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { BasicDateDayCalendar, BasicDateRangeCalendar, BasicStaticDateTimePicker } from "../../components";
import { checkDoesUserHaveEvents, getEventsByDay } from "../../firebase/API";
import { UniversalModal, Day } from "../../components/";
import { DatePattern, MOUNTHS } from "../../firebase/types";
import { AUTH_USER_ROUTES } from '../../router/routesNames'
import Calendar from "react-calendar"
import classes from "./Calendar.module.scss";
import 'react-calendar/dist/Calendar.css';

// checkDoesUserHaveEvents();
let dayArg: DatePattern  = {
  year: '' as string,
  mounth: '' as MOUNTHS,
  day: '' as string,
}
export const triggerGetDayEvents = async () => {
  const dayData = await getEventsByDay(dayArg);
  console.log(dayData)
  return dayData;
}

const CalendarPage: FC = () => {
  const navigate = useNavigate();
  const [dayVisible, setDayVisible] = useState(false);
  const [dayContent, setDayContent] = useState('');

  return (
    <>
    <Outlet />
    <div>
      <h1>Calendar</h1>
      <Calendar
      onClickDay={(value, event) =>
          {
            const dayURL = value.toString().split(' ').splice(1, 3).join('_')
            setDayContent(value.toString())
            setDayVisible(true)
            const currentDayDatePatern: DatePattern = {
              year: dayURL?.split('_')[2] as string,
              mounth: dayURL?.split('_')[0] as MOUNTHS,
              day: dayURL?.split('_')[1] as string,
            }
            dayArg = currentDayDatePatern
            console.log(dayArg)
            // triggerGetDayEvents(currentDayDatePatern)
            navigate(`${AUTH_USER_ROUTES.CALENDAR}/${auth.currentUser?.uid}/${dayURL}`)
          }
        }
      className={classes.calendarWrapper}
      tileClassName={classes.calendarTile}
      tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <div style={{ backgroundColor: 'red' }}>It's Sunday!</div> : null}
      />
    </div>
    {/* <UniversalModal content={<Day content={dayContent}/>} visible={dayVisible} setVisible={setDayVisible} title={''}/> */}
    </>
  );
}

export default CalendarPage;