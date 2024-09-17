import { FC } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations.tsx";
import classes from "./Home.module.scss";

const Home: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.homePage}
    >
      <motion.h1 custom={1} variants={textAnimation}>
        Home
      </motion.h1>
    </motion.div>
  );
};

export default Home;
