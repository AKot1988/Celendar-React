import { Calendar, DayPage, Profile, NewTask, Edit, ProfileEdit } from "../pages";
import { AUTH_USER_ROUTES } from "./routesNames";
import { getEventsByUserAndDay, getEventsByUser, getUserData, getEventsByUserDayId } from "../firebase/API";
import { EditAction } from "../pages/Edit/Edit";
import { profileEditAction } from "../pages/ProfileEdit/ProfileEdit.tsx";
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
    path: AUTH_USER_ROUTES.PROFILE,
    children: [
      {
        index: true,
        element: <Profile />,
        loader: getUserData,
      },
      {
        path: `${AUTH_USER_ROUTES.PROFILE}/edit`,
        element: <ProfileEdit />,
        action: profileEditAction,
        loader: getUserData,
      },
    ],
  },
];
