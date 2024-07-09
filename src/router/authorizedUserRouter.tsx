import { Calendar, Day, Task, Profile } from "../pages";
import { AUTH_USER_ROUTES } from "./routesNames";

export const authorizedUserRouter = [
  {
    path: AUTH_USER_ROUTES.CALENDAR,
    element: <Calendar/>,
  },
  {
    path: AUTH_USER_ROUTES.DAY,
    element: <Day/>
  },
  {
    path: AUTH_USER_ROUTES.TASK,
    element: <Task/>
  },
  {
    path: AUTH_USER_ROUTES.PROFILE,
    element: <Profile/>
  }
]