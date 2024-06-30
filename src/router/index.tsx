import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from 'react';
import { adminRouter } from "./adminRouter";
import { authorizedUserRouter } from "./authorizedUserRouter";
import { commonRouter } from "./commonRouter";
import { Layout, Not_Found } from "../pages";
import { ROLES } from "./types";
import { auth } from '../firebase/auth';
import { onAuthStateChanged } from "firebase/auth"


const createRouterByRole = (role: ROLES) => {
  switch(role) {
    case ROLES.ADMIN:
      return [...adminRouter, ...commonRouter];
    case ROLES.AUTHORIZED_USER:
      return [...commonRouter, ...authorizedUserRouter];
    case ROLES.GUEST:
      return commonRouter;
    default:
      return [];
  }

}

const role = auth.currentUser ? ROLES.AUTHORIZED_USER : ROLES.GUEST;
const AppRouter = () => {
  const [currentRole, setRole] = useState<ROLES>(role);
  useEffect(() => {onAuthStateChanged(auth, (currentUser)=>{setRole(currentUser? ROLES.AUTHORIZED_USER : ROLES.GUEST)})}, [auth.currentUser]);
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: createRouterByRole(currentRole),
    errorElement: <Not_Found/>
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter;