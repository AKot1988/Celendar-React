import { FC } from "react";
import { motion } from "framer-motion";
import {
  textAnimation,
  myFotoAnimation,
} from "../../components/Animations/Animations.tsx";
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
      <div className={classes.contactPageContent}>
        <motion.img
          custom={5}
          variants={myFotoAnimation}
          className={classes.contactPageMyFace}
          src="https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonImages%2F20241008_155429_0_0_0_0-removebg.png?alt=media&token=bdcc6b4e-b62c-4f84-b3a3-c2a4211f5938"
        />
        {/* <div className={classes.contactPageRegistrationBlock}>
          <div className={classes.contactPageRegistrationBlockBackground}></div>
          <h1>Варіанти зв'язку</h1>
        </div> */}
      </div>
      {/* <iframe className={classes.contactPagePDF} src="https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonFiles%2FAnton_Kulibabenko_CV_FrontEnd%2015.10.2024.pdf?alt=media&token=bb5a5c09-23d9-404e-823d-2beea531c5c1"></iframe> */}
    </motion.div>
  );
};

export default Contact;
