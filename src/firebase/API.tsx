import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const usersCollectionRef = collection(db, 'users'); //отримання колекції юзерів

export const addNewUser = async function(UID: string) {
    setDoc(doc(usersCollectionRef, UID), {
    created_at: new Date(),
    email: 'email',
    name: 'name',
    password: 'password',
    updated_at: new Date()
  })
}

const userRef = doc(usersCollectionRef, 'hereWillBeUID');
const docSnapShot = await getDoc(userRef);
export const userData = docSnapShot.data();

export const userDataByUID = async function (UID: string) { // повернення даних юзера по UID
  const docRef = doc(db, 'users', UID);
  const docSnapShot = await getDoc(docRef);
  const userData = docSnapShot.data();
  if (docSnapShot.exists()) {
    console.log('Document data:', docSnapShot.data());
  } else {
    throw new Error('No such user!');
  }
  return userData;
}


export const  getUsersCollectionRef = async function() {
  const users = collection(db, 'users', ); // here is ref to users collection
  const usersSnapshot = await getDocs(users);
  const eventsList = usersSnapshot.docs.map(doc => doc.data());
  return eventsList;
}

export const  getUser = async function() {
  const userRef = doc(db, 'users', 'hereWillBeUID'); // here is ref to user by UID
  // const userSnapshot = await getDoc(userRef);
  // const userData = userSnapshot.doc.map(doc => doc.data());
  return userRef;
}