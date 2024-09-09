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

function formattedMinutes(minutes: number) {
  if (minutes <= 0) {
    return `0${minutes}`;
  } else {
    return `${minutes}`;
  }
}

export const dateToDisplay = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${getMonthByNumber(
    newDate.getMonth()
  )} ${newDate.getFullYear()} ${newDate.getHours()}:${formattedMinutes(
    newDate.getMinutes()
  )}`;
};

export const dateMapper = (date: string) => {
  const [day, mounth, clear, year] = date.split("_");
  return `${WEEKDAYS[day as keyof typeof WEEKDAYS]} ${clear} ${
    UKRMOUNTS[mounth as keyof typeof UKRMOUNTS]
  }  ${year}`;
};
