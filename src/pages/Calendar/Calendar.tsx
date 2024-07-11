import { FC } from "react";
import { useLoaderData } from "react-router-dom"

export function mockTimeOutFunction() {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

// Використання промісу
// delay(5000).then(() => console.log('Проміс вирішився через 5 секунд'));

const Calendar: FC = () => {
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
}

export default Calendar;