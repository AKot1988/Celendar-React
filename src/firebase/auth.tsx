import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { app, googleAuthProvider } from './firebase'

export const auth = getAuth(app)

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


// const createNewUser = (email: string, password: string) => {
//   createUserWithEmailAndPassword(auth, email, password) // This is the function that creates a new user
//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }


// const signInWithEmailAndPassword = (auth, email: string, password: string) => {
//   signInWithEmailAndPassword(auth, email, password) // This is the function that signs in a user
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }