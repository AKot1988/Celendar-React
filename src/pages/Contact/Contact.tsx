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
      <motion.iframe className={classes.contactPagePDF} src="https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonFiles%2FAnton_Kulibabenko_CV_FrontEnd%2015.10.2024.pdf?alt=media&token=bb5a5c09-23d9-404e-823d-2beea531c5c1"></motion.iframe>
    </motion.div>
  );
};

export default Contact;
