import { FC, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { BasicDateDayCalendar, BasicDateRangeCalendar, BasicStaticDateTimePicker } from "../../components";
import { UniversalModal, Day } from "../../components/";
import Calendar from "react-calendar"
import classes from "./Calendar.module.scss";
import 'react-calendar/dist/Calendar.css';

export function mockTimeOutFunction() {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

const CalendarPage: FC = () => {
  // const data = useLoaderData();
  const [dayVisible, setDayVisible] = useState(false);
  const [dayContent, setDayContent] = useState('');

  return (
    <>
    <div>
      <h1>Calendar</h1>
      {/* <Day content={dayContent}/> */}
      <Calendar
      onClickDay={(value, event) =>
          {
            setDayContent(value.toString())
            setDayVisible(true)
          }
        }
      className={classes.calendarWrapper}
      tileClassName={classes.calendarTile}
      // tileClassName={({ date, view }) => view === 'month' && date.getDay() === 0 ? 'sunday' : null}
      tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <div style={{ backgroundColor: 'red' }}>It's Sunday!</div> : null}
      />
      {/* <BasicDateDayCalendar />
      <BasicDateRangeCalendar />
      <BasicStaticDateTimePicker /> */}
    </div>
    <UniversalModal content={<Day content={dayContent}/>} visible={dayVisible} setVisible={setDayVisible} title={''}/>
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