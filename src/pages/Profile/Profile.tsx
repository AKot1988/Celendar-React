import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { navlinkEditProfProp } from "./helper.tsx";
import { userDataProps } from "../../firebase/types.tsx";
import { CustomNavLink } from "../../components/index.tsx";
import { textAnimation } from "../../components/Animations/Animations.tsx";
import classes from "./Profile.module.scss";
import { auth } from "../../firebase/firebase.tsx";

const Profile: FC = () => {
  const userData = useLoaderData() as userDataProps;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.profilePage}
    >
      <motion.h1 custom={1}variants={textAnimation}>Profile</motion.h1>
      <motion.div className={classes.profileInfo}>
      {userData.avatar ? <motion.img custom={2}variants={textAnimation} src={userData.avatar} className={classes.profilePagePhoto}></motion.img>: <motion.img custom={2}variants={textAnimation} src={auth.currentUser?.photoURL || ''} className={classes.profilePagePhoto}></motion.img>}
        <motion.p custom={2}variants={textAnimation}>
          Ім'я: {userData.name.split(" ")[0]}
        </motion.p>
        <motion.p custom={3} variants={textAnimation}>
          Прізвище: {userData.name.split(" ")[1]}
        </motion.p>
        <motion.p custom={4} variants={textAnimation}>
          Додаткова інформація: {userData.about}
        </motion.p>
        <motion.p custom={5}variants={textAnimation}>
          День народження: {userData.birthdate}
        </motion.p>
        <motion.p custom={6} variants={textAnimation}>Стать: {userData.gender}</motion.p>
        <CustomNavLink {...navlinkEditProfProp} className={classes.profilePageEditButton}></CustomNavLink>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
