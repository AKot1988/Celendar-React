import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { googleAuthProvider, auth } from './firebase'
import { writeUserData, createUserEvCollection } from './API'
import { userDataProps } from './types.tsx'

/**
 * Function creates a new user and automatically signs in with new user credentials.
*
* @param {string} firstName - new user's first name;
* @param {string} lastName - new user's last name;
* @param {ROLES} role - new user's role in the system (admin or garson);
* @param {string} email - new user's e-mail;
* @param {string} password - new user's password;
*/

export const signUpWithEmailAndPassword = (newUserData: userDataProps) => {
  return createUserWithEmailAndPassword(auth, newUserData.email as string, newUserData.password as string) // This is the function that creates a new user
    .then((userCredential) => {
      writeUserData(userCredential.user.uid, newUserData, "create")
      createUserEvCollection(userCredential.user.uid)
    })
    .catch((error) => {
      throw new Error ("Сталась помилка аутентифікації" + error.code + error.message)
    });
}


export const logInWithEmailAndPassword = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password) // This is the function that signs in a user
    // .then((userCredential) => {
    //   const user = userCredential.user;
    // })
    .catch((error) => {
      throw new Error ("Сталась помилка аутентифікації" + error.code + error.message)
    });
}



onAuthStateChanged(auth, (user) => {
    if (user) {
      return auth.currentUser
    } else {
      return auth.currentUser
    }
  }
)

export const googleSignIn = async ()=> {
  await signInWithPopup(auth, googleAuthProvider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    const user = result.user;
    return user
  }).catch((error) => {
    throw new Error ("Сталась помилка аутентифікації" + error.code + error.message)
  });
}

export const googleSignOut = async () => {
  await signOut(auth).then(() => {
  }).catch((error) => {
    throw new Error ("Сталась помилка аутентифікації" + error.code + error.message)
  });

}

/**
 * Function signs out current user.
 */
export const logOut = async (): Promise<void> => {
	try {
		await signOut(auth)
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}