import { duration } from "@mui/material";

export const textAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
      },
    }),
  };

export const calendarAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        delay: custom * 0.2,
      },
    }),
}