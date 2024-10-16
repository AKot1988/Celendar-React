import { Home, About, Contact, Not_Found, LogIn } from "../pages";
import { COMMON_ROUTES } from "./routesNames";
import { authType } from "../pages/Login/LogIn";




export const commonRouter = [
  {
    index: true,
    element: <Home/>,
  },
  {
    path: COMMON_ROUTES.ABOUT,
    element: <About/>
  },
  {
    path: COMMON_ROUTES.CONTACT,
    element: <Contact/>
  },
  {
    path: COMMON_ROUTES.NOT_FOUND,
    element: <Not_Found/>
  },
  {
    path: COMMON_ROUTES.LOGIN,
    element: <LogIn/>,
    action: authType,
  }
]