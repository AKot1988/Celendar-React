import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  DocumentReference,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { NewUserFormData, NewEventData } from "./types.tsx";
import { ROLES } from "../router/types";
import { dateUniMapper } from "../pages/Calendar/helper";
import { LoaderFunctionArgs } from "react-router-dom";

export const usersCollectionRef = collection(db, "users");
export const eventsCollectionRef = collection(db, "events");

export const getUserData = async function () {
  const UID = auth.currentUser?.uid;
  const docRef = doc(usersCollectionRef, UID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

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
  const querySnapshot = await getDocs(collection(db, "events"));
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
  }
  return userEvents;
};

export const deleteEventAction = async function (eventToDelete: NewEventData) {
  const currentUser = auth.currentUser?.uid;
  if (!currentUser) {
    throw new Error("User not authenticated");
  }

  const docRef = doc(db, "events", currentUser);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    throw new Error("User events document does not exist");
  }
  const userEvents = (docSnapshot.data()?.taskList as NewEventData[]) || [];
  const updatedEvents = userEvents.filter((el) => el.id !== eventToDelete.id);
  await setDoc(docRef, { taskList: updatedEvents });
};

export const editEventAction = async function (editedEvent: NewEventData) {
  const docRef = doc(collection(db, "events"), auth.currentUser?.uid);
  const allEvents = await getEventsByUser();
  const updatedEventsArray = allEvents.map((event: NewEventData) => {
    if (event.id === editedEvent.id) {
      return editedEvent;
    } else {
      return event;
    }
  });
  await setDoc(docRef, { taskList: [...updatedEventsArray] });
};

export const getEventsByUser = async function () {
  const currentUser = auth.currentUser?.uid;
  let checkDoesUserHaveEvents = false;
  let userEvents: NewEventData[] | [] = [];
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      (checkDoesUserHaveEvents = true), (userEvents = doc.data().taskList);
    }
  });
  if (!checkDoesUserHaveEvents) {
    console.log("У користувача немає подій");
  }

  return userEvents;
};

export const getEventsByUserDayId = async function ({
  params,
}: LoaderFunctionArgs) {
  const { currentUser, day, id } = params;
  const querySnapshot = await getDocs(collection(db, "events"));
  let eventToEdit: NewEventData | null = null;
  querySnapshot.forEach((doc) => {
    if (doc.id === currentUser) {
      const taskToEdit = doc
        .data()
        .taskList.find((event: NewEventData) => event.id === id);
      eventToEdit = taskToEdit;
    } else {
      throw new Error("Подія не знайдена");
    }
  });
  return eventToEdit;
};
