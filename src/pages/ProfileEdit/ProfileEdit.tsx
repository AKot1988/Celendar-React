import { FC, useEffect } from "react";
import { useLoaderData, redirect, ActionFunctionArgs } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { writeUserData } from "../../firebase/API";
import { userDataProps } from "../../firebase/types.tsx";
import { UniversalForm } from "../../components";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { ROLES } from "../../router/types";
import { profileEditProps } from "./helper";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animations/Animations";
import classes from "./ProfileEdit.module.scss";

let userData: userDataProps | null;

export const profileEditAction = async function ({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const editedProfileData: userDataProps = {
    name: formData.get("name") as string,
    birthdate: formData.get("birthdate") as string,
    about: formData.get("about") as string,
    email: userData?.email as string,
    password: userData?.password as string,
    updated_at: new Date().getTime(),
    created_at: userData?.created_at as string,
    role: userData?.role as ROLES,
    gender: formData.get("gender") as string,
    events: userData?.events as string,
    avatar: formData.get("photo") as string,
  };
  await writeUserData(
    auth.currentUser?.uid as string,
    editedProfileData,
    "edit"
  );
  return redirect(`${AUTH_USER_ROUTES.PROFILE}`);
};

const ProfileEdit: FC = () => {
  const data = useLoaderData() as userDataProps;
  userData = data;
  useEffect(() => {
    const dataKeys = Object.keys(data);
    profileEditProps.inputs.forEach((input) => {
      if (dataKeys.includes(input.name)) {
        input.value = data[input.name as keyof userDataProps] as string;
      }
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.profileEditPage}
    >
      <motion.h1
        custom={1}
        variants={textAnimation}
        className={classes.profileEditPageHeader}
      >
        ProfileEdit
      </motion.h1>
      <UniversalForm data={profileEditProps} />
    </motion.div>
  );
};

export default ProfileEdit;
