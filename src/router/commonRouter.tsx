import { COMMON_ROUTES } from "./routesNames";

const commonRouter = [
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
    element: <NotFound/>
  }
]