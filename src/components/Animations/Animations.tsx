import { teal } from "@mui/material/colors";

export const textAnimation = {
    hidden: { opacity: 0, x: -100},
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

export const rotateSVGs = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  whileHover: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
  whileTap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%",
  },
};