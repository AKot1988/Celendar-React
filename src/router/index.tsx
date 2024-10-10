import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from 'react';
import { adminRouter } from "./adminRouter";
import { authorizedUserRouter } from "./authorizedUserRouter";
import { commonRouter } from "./commonRouter";
import { Layout, Not_Found } from "../pages";
import { ROLES } from "./types";
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from "firebase/auth"
import { getUserData } from "../firebase/API";


const createRouterByRole = (role: ROLES) => {
  switch(role) {
    case ROLES.ADMIN:
      return [...adminRouter, ...commonRouter];
    case ROLES.AUTHORIZED_USER:
      return [...commonRouter, ...authorizedUserRouter];
    case ROLES.GUEST || null || undefined:
      return [...commonRouter];
    default:
      return [...commonRouter];
  }

}

const AppRouter = () => {
  const role = auth.currentUser ? ROLES.AUTHORIZED_USER : ROLES.GUEST;
  const [currentRole, setRole] = useState<ROLES>(role);
//   useEffect(() => {
//   onAuthStateChanged(auth, (currentUser) => {
//     console.log("Current user: ", currentUser); // Для дебагу
//     setRole(currentUser ? ROLES.AUTHORIZED_USER : ROLES.GUEST);
//   });
// }, [auth.currentUser]);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      // Спробуйте дати невеликий таймер перед оновленням ролі
      setTimeout(() => {
        setRole(ROLES.AUTHORIZED_USER);
      }, 1000);  // Затримка у 100 мс для безпеки
    } else {
      setRole(ROLES.GUEST);
    }
  });

  return () => unsubscribe();
}, []);
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    errorElement: <Not_Found/>,
    children: createRouterByRole(currentRole),
    loader: getUserData,
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter;