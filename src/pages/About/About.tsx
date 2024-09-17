import { FC } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations.tsx";
import classes from './About.module.scss';

const About: FC = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" className={classes.aboutPage}>
      <motion.h1 custom={1} variants={textAnimation} >About</motion.h1>
    </motion.div>
  );
}

export default About;