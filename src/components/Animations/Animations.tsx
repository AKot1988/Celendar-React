// import { duration } from "@mui/material";
// import { delay } from "framer-motion";

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

export const myFotoAnimation = {
  hidden: { opacity: 0, x: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 2,
    },
  }),
};

export const contactBlockAnimation = {
  hidden: { opacity: 0, x: -200, width: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    width: "100%",
    transition: {
      delay: custom * 0.2,
      duration: 1,
    },
  }),
};

export const fadeTransparentInAnimation = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
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
};

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
