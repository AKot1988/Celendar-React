import { Calendar, DayPage, Task, Profile } from '../pages';
import { AUTH_USER_ROUTES } from './routesNames';
import { mockTimeOutFunction } from '../pages/DayPage/DayPage';
import { getEventsByDay } from "../firebase/API";

export const authorizedUserRouter = [
  {
    path: AUTH_USER_ROUTES.CALENDAR,
    element: <Calendar />,
    // loader : mockTimeOutFunction
    children: [
      {
        path: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day`,
        element: <DayPage />,
        // loader: getEventsByDay,
      },
    ],
  },
  {
    path: AUTH_USER_ROUTES.TASK,
    element: <Task />,
  },
  {
    path: AUTH_USER_ROUTES.PROFILE,
    element: <Profile />,
  },
];
