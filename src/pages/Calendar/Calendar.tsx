import { FC } from "react";
// import { useLoaderData } from "react-router-dom";
import { BasicDateCalendar } from "../../components";

export function mockTimeOutFunction() {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

const Calendar: FC = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <BasicDateCalendar />
    </div>
  );
}

export default Calendar;