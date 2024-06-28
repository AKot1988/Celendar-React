import { Users, Events, Settings } from "../pages";
import { ADMIN_ROUTES } from "./routesNames";

export const adminRouter = [
  {
    path: ADMIN_ROUTES.USERS,
    element: <Users/>
  },
  {
    path: ADMIN_ROUTES.EVENTS,
    element: <Events/>
  },
  {
    path: ADMIN_ROUTES.SETTINGS,
    element: <Settings/>
  }
]