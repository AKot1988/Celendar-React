import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import {
  NewUserFormData,
  NewEventData,
  DatePattern,
  MOUNTHS,
  PRIORITY,
} from "./types.tsx";
import { ROLES } from "../router/types";
import { LoaderFunctionArgs } from "react-router-dom";

export const usersCollectionRef = collection(db, "users"); //отримання колекції юзерів
export const eventsCollectionRef = collection(db, "events"); //отримання подій юзерів

export const addNewUserToBase = async function (
  UID: string,
  userData: NewUserFormData
) {
  console.log(userData);
  await setDoc(doc(usersCollectionRef, UID), {
    created_at: new Date(),
    // email: userData.email,
    name: userData.name,
    // password: userData.password,
    birthdate: userData.birthdate,
    gender: userData.gender,
    role: ROLES.AUTHORIZED_USER,
    updated_at: new Date(),
  });
};

// //Функція створення нового івенту
// export const setNewEvent = async function (data: NewEventData) {
//   console.log("call setNewEvent function");
//   console.log(data);
//   const docRef = doc(
//     collection(db, "events"),
//     auth.currentUser?.uid,
//     data.date.year,
//     data.date.mounth
//   );
//   const day = data.date.day;
//   const docSnap = await getDoc(docRef);
//   const docData = docSnap.data();
//   if (docData === undefined) {
//     console.log("На цей день ще немає подій");
//     // docData[data.date.day] = { taskList: [data] }
//     await setDoc(docRef, { [data.date.day]: { taskList: [data] } });
//   } else {
//     console.log("На цей день події існують, додаємо ще одну");
//     docData[data.date.day].taskList.push(data);
//     await setDoc(docRef, docData);
//   }
// };

//Функція створення нового івенту
export const setNewEvent = async function (data: NewEventData) {
  console.log("call setNewEvent function");
  console.log(data);
  const docRef = doc(collection(db, "events"), auth.currentUser?.uid);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  await setDoc(docRef, { taskList: [...docData?.taskList, data] });
};

export const getEventsByUser = async function ({ params }: LoaderFunctionArgs) {
  const { currentUser } = params;
  let checkDoesUserHaveEvents = false;
  let userEvents: NewEventData[] | [] = [];
  const querySnapshot = await getDocs(collection(db, "events")); //формування квері для отримання всіх документів колекції подій
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      (checkDoesUserHaveEvents = true), (userEvents = doc.data().taskList);
    }
  }); //перевірка чи юзер взагалі має події
  if (!checkDoesUserHaveEvents) {
    console.log("У користувача немає подій");
  }

  return userEvents; //повернення подій користувача у вигляді масиву
};

export const getEventsByUserAndDay = async function ({
  params,
}: LoaderFunctionArgs) {
  const { currentUser, day } = params;
  let checkDoesUserHaveEvents = false;
  let userEvents: NewEventData[] | [] = [];
  const querySnapshot = await getDocs(collection(db, "events")); //формування квері для отримання всіх документів колекції подій
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      (checkDoesUserHaveEvents = true),
        (userEvents = doc.data().taskList.filter((event: NewEventData) => event.begin === day));
    }
  });
  if (!checkDoesUserHaveEvents) {
    console.log("У користувача немає подій");
  }

  return userEvents; //повернення подій користувача у вигляді масиву
};
