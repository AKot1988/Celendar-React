import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { NewUserFormData, NewEventData } from "./types.tsx";
import { ROLES } from "../router/types";
import { dateUniMapper } from "../pages/Calendar/helper";
import { LoaderFunctionArgs } from "react-router-dom";

export const usersCollectionRef = collection(db, "users"); //отримання колекції юзерів
export const eventsCollectionRef = collection(db, "events"); //отримання подій юзерів

export const addNewUserToBase = async function (
  UID: string,
  userData: NewUserFormData
) {
  await setDoc(doc(usersCollectionRef, UID), {
    created_at: new Date(),
    name: userData.name,
    birthdate: userData.birthdate,
    gender: userData.gender,
    role: ROLES.AUTHORIZED_USER,
    updated_at: new Date(),
  });
};

//Функція створення нового івенту
export const setNewEvent = async function (data: NewEventData) {
  const docRef = doc(collection(db, "events"), auth.currentUser?.uid);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  await setDoc(docRef, { taskList: [...docData?.taskList, data] });
};

export const getEventsByUserAndDay = async function ({
  params,
}: LoaderFunctionArgs) {
  const { currentUser, day } = params;
  let checkDoesUserHaveEvents = false;
  let userEvents: NewEventData[] | [] = [];
  const querySnapshot = await getDocs(collection(db, "events")); //формування квері для отримання всіх документів в колекції подій
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      (checkDoesUserHaveEvents = true),
        (userEvents = doc
          .data()
          .taskList.filter(
            (event: NewEventData) => dateUniMapper(event.begin) === day
          ));
    }
  });
  if (!checkDoesUserHaveEvents) {
    console.log("У користувача немає подій");
  }

  return userEvents; //повернення подій користувача за конкретний день у вигляді масиву
};

export const getEventsByUser = async function () {
  const currentUser = auth.currentUser?.uid;
  let checkDoesUserHaveEvents = false;
  let userEvents: NewEventData[] | [] = [];
  const querySnapshot = await getDocs(collection(db, "events")); //формування квері для отримання всіх документів в колекції подій
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      (checkDoesUserHaveEvents = true), (userEvents = doc.data().taskList);
    }
  });
  if (!checkDoesUserHaveEvents) {
    console.log("У користувача немає подій");
  }

  return userEvents; //повернення подій користувача у вигляді масиву
};
