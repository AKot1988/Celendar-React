import { FC } from "react";
import { CustomNavLink } from "../../components/index.tsx";
import { motion } from "framer-motion";
import {
  textAnimation,
  myFotoAnimation,
  contactBlockAnimation,
  fadeTransparentInAnimation,
} from "../../components/Animations/Animations.tsx";
import { contactsData } from "./helper.tsx";
import classes from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.contactPage}
    >
      <motion.h1
        custom={1}
        variants={textAnimation}
        className={classes.contactPageHeader}
      >
        Contact
      </motion.h1>
      <div className={classes.contactPageContent}>
        <motion.div
          custom={5}
          variants={myFotoAnimation}
          className={classes.contactPageContentMyFaceContainer}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonImages%2FcropedWithoutBackground.png?alt=media&token=7db78761-36a6-476b-a70e-34f57f0f2c79"
            alt="my face"
            className={classes.contactPageContentMyFaceImage}
          />
        </motion.div>
        <div className={classes.contactPageContentContactsBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contactBlockAnimation}
            className={classes.contactPageContentContactsBlockBackground}
          ></motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={fadeTransparentInAnimation}
            className={classes.contactPageContentContactsBlockLinks}
          >
            {contactsData.map((contact, index) => (
              <CustomNavLink
                key={index}
                title={contact.title}
                path={contact.path}
                children={contact.children}
                className={classes.contactPageContentContactsBlockLinksItem}
              />
            ))}
          </motion.div>
        </div>
      </div>
      {/* <iframe className={classes.contactPagePDF} src="https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonFiles%2FAnton_Kulibabenko_CV_FrontEnd%2015.10.2024.pdf?alt=media&token=bb5a5c09-23d9-404e-823d-2beea531c5c1"></iframe> */}
    </motion.div>
  );
};

export default Contact;
