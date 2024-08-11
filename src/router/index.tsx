import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from 'react';
import { adminRouter } from "./adminRouter";
import { authorizedUserRouter } from "./authorizedUserRouter";
import { commonRouter } from "./commonRouter";
import { Layout, Not_Found } from "../pages";
import { ROLES } from "./types";
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from "firebase/auth"


const createRouterByRole = (role: ROLES) => {
  // console.log('user role switced to ', role, 'routes are being created')
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
  // useEffect(()=>{setRole(role)}, [auth.currentUser])
  // useEffect(() => {onAuthStateChanged(auth, (currentUser)=>{setRole(currentUser? ROLES.AUTHORIZED_USER : ROLES.GUEST), console.log('user role has been changed')})}, [auth.currentUser]);
  useEffect(() => {onAuthStateChanged(auth, (currentUser)=>{setRole(currentUser? ROLES.AUTHORIZED_USER : ROLES.GUEST)})}, [auth.currentUser]);
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    errorElement: <Not_Found/>,
    children: createRouterByRole(currentRole),
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter;