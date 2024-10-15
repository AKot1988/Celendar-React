import { FC, useState } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations.tsx";

import { aboutSectionInfo } from "./helper.tsx";
import classes from './About.module.scss';

const About: FC = () => {
  const [welcomeLanguage, setWelcomeLanguage] = useState("ukr");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.aboutPage}
    >
      <motion.h1 custom={1} variants={textAnimation} className={classes.aboutPageTitle}>
        About
      </motion.h1>
      <div className={classes.aboutPageButtons}>
        <button className={classes.aboutPageSetLanguageButton} onClick={() => setWelcomeLanguage("eng")}>ENG</button>
        <button className={classes.aboutPageSetLanguageButton} onClick={() => setWelcomeLanguage("ukr")}>УКР</button>
      </div>
      {setAboutContent(welcomeLanguage)}
    </motion.div>
  );
};

export default About;



const setAboutContent = (welcomeLanguage: string) => {
  switch (welcomeLanguage) {
    case "eng":
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={classes.aboutPageContent}
        >
          <motion.p custom={2} variants={textAnimation} dangerouslySetInnerHTML={{ __html: aboutSectionInfo.ENG as string }}/>
        </motion.div>
      );
    case "ukr":
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={classes.aboutPageContent}
        >
          <motion.p custom={2} variants={textAnimation} dangerouslySetInnerHTML={{ __html: aboutSectionInfo.UKR as string }}/>
        </motion.div>
      );
    default:
      return "Welcome to the home page!";
  }
};
