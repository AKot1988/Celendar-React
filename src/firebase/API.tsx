import { collection, getDocs, doc, getDoc, setDoc, query, where } from 'firebase/firestore';
import { auth, db } from './firebase';
import { NewUserFormData, NewEventData, PRIORITY } from './types.tsx';
import { ROLES } from '../router/types';

export const usersCollectionRef = collection(db, 'users'); //отримання колекції юзерів
export const eventsCollectionRef = collection(db, 'events'); //отримання подій юзерів
export const userEventsCollectionRef = collection(db, 'events', auth.currentUser?.uid as string); //отримання подій конкретного юзера

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

const userRef = doc(usersCollectionRef, 'hereWillBeUID');
const docSnapShot = await getDoc(userRef);
export const userData = docSnapShot.data();

export const userDataByUID = async function (UID: string) {
  // повернення даних юзера по UID
  const docRef = doc(db, 'users', UID);
  const docSnapShot = await getDoc(docRef);
  const userData = docSnapShot.data();
  if (docSnapShot.exists()) {
    console.log('Document data:', docSnapShot.data());
  } else {
    throw new Error('No such user!');
  }
  return userData;
};

export const getUsersCollectionRef = async function () {
  const users = collection(db, 'users'); // here is ref to users collection
  const usersSnapshot = await getDocs(users);
  const eventsList = usersSnapshot.docs.map((doc) => doc.data());
  return eventsList;
};

export const getUser = async function () {
  const userRef = doc(db, 'users', 'hereWillBeUID'); // here is ref to user by UID
  // const userSnapshot = await getDoc(userRef);
  // const userData = userSnapshot.doc.map(doc => doc.data());
  return userRef;
};


const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

export const addReferenseToUserEvents = async function () {
  //Створення посилання на юзера у Колекції Юзерів
  const userReference = doc(usersCollectionRef, auth.currentUser?.uid);
  console.log(userReference);
  await setDoc(doc(db, "events", auth.currentUser?.uid), {userReference })
}

export const checkDoesUserHaveEvents = async function () {
  const arr = [];
  const  eventsQuery = await getDocs(collection(db, 'events'));
  console.log(eventsQuery);
  eventsQuery.forEach((docRef) => {
    console.log(docRef)
    if(docRef.id === auth.currentUser?.uid) {
      console.log('User has events')
      arr.push(docRef)
    }
  });
  if(arr.length === 0) {
    console.log('User has no events')
    await addReferenseToUserEvents();
  }
}

const setNewEvent = async function (data: NewEventData) {
  //Створення нової події
  console.log('створюємо подію')
  await setDoc(doc(userEventsCollectionRef), {
    content: data.content,
    beggining: data.begin,
    end: data.end,
    owner: data.owner,
    title: data.title,
    type: data.type,
    priority: data.priority,
  });
}

await setNewEvent({
  title: 'title',
  begin: 'beggining',
  content: 'content',
  end: 'end',
  owner: 'owner',
  type: 'type',
  priority: PRIORITY.HIGH,
})