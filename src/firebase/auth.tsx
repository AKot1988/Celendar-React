import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { googleAuthProvider, auth } from "./firebase";
import {
  writeUserData,
  createUserEvCollection,
  checkDoesUserExist,
} from "./API";
import { userDataProps } from "./types.tsx";
import { redirect } from "react-router-dom";
import { AUTH_USER_ROUTES, COMMON_ROUTES } from "../router/routesNames";

/**
 * Function creates a new user and automatically signs in with new user credentials.
 *
 * @param {string} firstName - new user's first name;
 * @param {string} lastName - new user's last name;
 * @param {ROLES} role - new user's role in the system (admin or garson);
 * @param {string} email - new user's e-mail;
 * @param {string} password - new user's password;
 */

export const signUpWithEmailAndPassword = async (
  newUserData: userDataProps
) => {
  return createUserWithEmailAndPassword(
    auth,
    newUserData.email as string,
    newUserData.password as string
  ) // This is the function that creates a new user
    .then((userCredential) => {
      writeUserData(userCredential.user.uid, newUserData, "create");
      createUserEvCollection(userCredential.user.uid);
    })
    .catch((error) => {
      let errorMsg = "";
      if (error.code === "auth/email-already-in-use") {
        errorMsg = "пошта вже зареєстрована";
      } else {
        errorMsg = error.message;
      }
      alert(`Сталась помилка: ${errorMsg}`);
    });
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await signInWithEmailAndPassword(auth, email, password) // This is the function that signs in a user
    .catch((error) => {
      let errorMsg = "";
      if (
        error.code === "auth/invalid-credential" ||
        error.message === "auth/invalid-credential"
      ) {
        errorMsg = "Невірний логін або пароль";
      }
      alert(`Сталась помилка ${errorMsg}`);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    return auth.currentUser;
  } else {
    return auth.currentUser;
  }
});

export const googleSignIn = async () => { // This is the function that signs in a user with Google
  try {
    await signInWithPopup(auth, googleAuthProvider);
    await checkDoesUserExist(auth);
    // return redirect(AUTH_USER_ROUTES.CALENDAR);
  } catch (error) {
    console.log(error);
    return redirect(COMMON_ROUTES.LOGIN);
  }

  // userExist
  //   ? redirect(AUTH_USER_ROUTES.CALENDAR)
  //   : redirect(COMMON_ROUTES.LOGIN);
};

export const googleSignOut = async () => {
  await signOut(auth)
    .then(() => {})
    .catch((error) => {
      throw new Error(
        "Сталась помилка аутентифікації" + error.code + error.message
      );
    });
};

/**
 * Function signs out current user.
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(`AN ERROR OCCURED: ${error}`);
  }
};
