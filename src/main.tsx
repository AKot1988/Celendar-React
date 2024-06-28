import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import MyAppRouter from './router/index.tsx'
import './index.css'
// import { db } from './firebase/firebase.tsx'
// import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
// import { userDataByUID } from './firebase/API.tsx';

// console.log(userData)
// console.log(usersCollectionRef)
// console.log(await getUser())
// console.log(await userDataByUID(''))

// console.log('db', db)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(<MyAppRouter/>);