import { Home, About, Contact, Not_Found } from "../pages";
import { COMMON_ROUTES } from "./routesNames";

export const commonRouter = [
  {
    path: COMMON_ROUTES.HOME,
    element: <Home/>
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
  }
]