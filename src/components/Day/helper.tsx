import { MOUNTHS, WEEKDAYS, UKRMOUNTS } from "../../firebase/types";

export type DayDataProps = {
  title: string;
  description: string;
  begin: string;
  end: string;
  owner: string;
  type: string;
  priority: string;
  id: string;
};

function getMonthByNumber(monthNumber: number): string | undefined {
  const monthsArray = Object.values(MOUNTHS); // Отримуємо масив значень з енаму
  return monthsArray[monthNumber]; // Індексування з 0, тому віднімаємо 1
}

export const dateToDisplay = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${getMonthByNumber(
    newDate.getMonth()
  )} ${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
};

export const dateMapper = (date: string) => {
  console.log(date)
  const [day, mounth, clear, year] = date.split("_");
  return `${WEEKDAYS[day] as string} ${clear} ${UKRMOUNTS[mounth] as string}  ${year}`;
};



