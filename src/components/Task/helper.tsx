import { MOUNTHS, WEEKDAYS, UKRMOUNTS } from "../../firebase/types";

export const dateMapper = (date: string) => {
    const [day, mounth, clear, year, time] = date.split(" ");
    return `${WEEKDAYS[day as keyof typeof WEEKDAYS]} ${clear} ${
      UKRMOUNTS[mounth as keyof typeof UKRMOUNTS]
    }  ${year} ${time}`;
  };