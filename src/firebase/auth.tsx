import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { googleAuthProvider, auth } from './firebase'
import { addNewUserToBase } from './API'
import { NewUserFormData } from './types.tsx'

/**
 * Function creates a new user and automatically signs in with new user credentials.
*
* @param {string} firstName - new user's first name;
* @param {string} lastName - new user's last name;
* @param {ROLES} role - new user's role in the system (admin or garson);
* @param {string} email - new user's e-mail;
* @param {string} password - new user's password;
*/

export const signUpWithEmailAndPassword = (newUserData: NewUserFormData) => {
  return createUserWithEmailAndPassword(auth, newUserData.email, newUserData.password) // This is the function that creates a new user
    .then((userCredential) => {
      addNewUserToBase(userCredential.user.uid, newUserData)
      // Signed up
      const user = userCredential.user;
    })
    .catch((error) => {
      throw new Error ("Сталась помилка аутентифікації" + error.code + error.message)
    });
}


export const logInWithEmailAndPassword = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password) // This is the function that signs in a user
    .then((userCredential) => {
      const user = userCredential.user;
    })
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
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return user
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const googleSignOut = async () => {
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
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