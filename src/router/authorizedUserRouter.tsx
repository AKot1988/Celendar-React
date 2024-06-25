import { AUTH_USER_ROUTES } from "./routesNames";

export const authorizedUserRouter = [
  {
    path: AUTH_USER_ROUTES.CLAENDAR,
    element: <CALENDAR/>
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