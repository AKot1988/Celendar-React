import { FC, useState } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations.tsx";
import { heroSectionInfo } from "./helper.tsx";
import classes from "./Home.module.scss";

const Home: FC = () => {
  const [welcomeLanguage, setWelcomeLanguage] = useState("ukr");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.homePage}
    >
      <motion.h1 custom={1} variants={textAnimation} className={classes.homePageTitle}>
        Home
      </motion.h1>
      <div className={classes.homePageButtons}>
        <button className={classes.homePageSetLanguageButton} onClick={() => setWelcomeLanguage("eng")}>ENG</button>
        <button className={classes.homePageSetLanguageButton} onClick={() => setWelcomeLanguage("ukr")}>УКР</button>
      </div>
      {setHopageContent(welcomeLanguage)}
    </motion.div>
  );
};

export default Home;

const setHopageContent = (welcomeLanguage: string) => {
  switch (welcomeLanguage) {
    case "eng":
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={classes.homePageContent}
        >
          <motion.h2 custom={1} variants={textAnimation}>
            Welcome to the home page!
          </motion.h2>
          <motion.p custom={2} variants={textAnimation} dangerouslySetInnerHTML={{ __html: heroSectionInfo.ENG as string }}/>
        </motion.div>
      );
    case "ukr":
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={classes.homePageContent}
        >
          <motion.h2 custom={1} variants={textAnimation}>
            Вітаю на домашній сторінці!
          </motion.h2>
          <motion.p custom={2} variants={textAnimation} dangerouslySetInnerHTML={{ __html: heroSectionInfo.UKR as string }}/>
        </motion.div>
      );
    default:
      return "Welcome to the home page!";
  }
};
