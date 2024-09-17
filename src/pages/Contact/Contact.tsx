import { FC } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations.tsx";
import classes from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.contactPage}
    >
      <motion.h1 custom={1} variants={textAnimation}>
        Contact
      </motion.h1>
    </motion.div>
  );
};

export default Contact;
