import { Calendar, DayPage, Task, Profile, NewTask } from "../pages";
import { AUTH_USER_ROUTES } from "./routesNames";
import { getEventsByUser, getEventsByUserAndDay } from "../firebase/API";

export const authorizedUserRouter = [
  {
    path: AUTH_USER_ROUTES.CALENDAR,
    // element: <Calendar />,
    // loader : mockTimeOutFunction
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      {
        path: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day`,
        children: [
          {
            index: true,
            element: <DayPage />,
            loader: getEventsByUserAndDay,
          },
          {
            path: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/newTask`,
            action : () => console.log('Create task --> function directly on route'),
            element: <NewTask />,
          },
        ],
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
