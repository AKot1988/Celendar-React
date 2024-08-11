import { FC, useState } from "react";
import { useLoaderData, useParams, useNavigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { BasicDateDayCalendar, BasicDateRangeCalendar, BasicStaticDateTimePicker } from "../../components";
import { checkDoesUserHaveEvents } from "../../firebase/API";
import { UniversalModal, Day } from "../../components/";
import { AUTH_USER_ROUTES } from '../../router/routesNames'
import Calendar from "react-calendar"
import classes from "./Calendar.module.scss";
import 'react-calendar/dist/Calendar.css';

checkDoesUserHaveEvents();

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
            const dayURL = value.toString().split(' ').splice(1, 3).join('')
            setDayContent(value.toString())
            setDayVisible(true)
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

// const Calendar: FC = () => {
//   return (
//     <div>
//       <h1>Calendar</h1>
//       <BasicStaticDateTimePicker />
//     </div>
//   );
// }

export default CalendarPage;