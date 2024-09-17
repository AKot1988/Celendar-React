import { Calendar, DayPage, Task, Profile, NewTask, Edit } from "../pages";
import { AUTH_USER_ROUTES } from "./routesNames";
import { getEventsByUserAndDay, getEventsByUser, getUserData, getEventsByUserDayId } from "../firebase/API";
import { EditAction } from "../pages/Edit/Edit";
import { newTaskAction } from "../pages/NewTask/NewTask";

export const authorizedUserRouter = [
  {
    path: AUTH_USER_ROUTES.CALENDAR,
    children: [
      {
        index: true,
        element: <Calendar />,
        loader: getEventsByUser,
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
            action: newTaskAction,
            element: <NewTask />,
          },
          {
            path: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/:id/edit`,
            action: EditAction,
            loader: getEventsByUserDayId,
            element: <Edit/>,
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
    loader: getUserData
  },
];
