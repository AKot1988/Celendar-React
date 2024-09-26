import { COMMON_ROUTES, AUTH_USER_ROUTES } from "../../router/routesNames"
const authorizedUserLogo = 'https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonImages%2F%D0%9A%D1%83%D1%81%D1%8F%20%D0%B1%D0%B0%D1%82%D1%8C%D0%BA%D0%BE%D0%B2%D0%BD%D0%B0%20%23b5b5b5.jpg?alt=media&token=3ba6dbf5-6101-4e22-a4ee-5a27f10ca864'
const guestLogo = 'https://firebasestorage.googleapis.com/v0/b/calendar-react-85cff.appspot.com/o/commonImages%2F%D0%9A%D1%83%D1%81%D1%8F%20%D0%B1%D0%B0%D1%82%D1%8C%D0%BA%D0%BE%D0%B2%D0%BD%D0%B0%20%23b5b5b5.jpg?alt=media&token=3ba6dbf5-6101-4e22-a4ee-5a27f10ca864'
export const headerProps = {
  authorizedUser: {
    logo: authorizedUserLogo,
    navMenu: [
      {
        title: 'Home',
        path: COMMON_ROUTES.HOME,
        className: 'classes.headerNavItem'
      },
      {
        title: 'Calendar',
        path: AUTH_USER_ROUTES.CALENDAR,
        className: 'classes.headerNavItem'
      },
      {
        title: 'Profile',
        path: AUTH_USER_ROUTES.PROFILE,
        className: 'classes.headerNavItem'
      },
      {
        title: 'About',
        path: COMMON_ROUTES.ABOUT,
        className: 'classes.headerNavItem'
      },
      {
        title: 'Contact',
        path: COMMON_ROUTES.CONTACT,
        className: 'classes.headerNavItem'
      }
    ]
  },
  guest: {
    logo: guestLogo,
    navMenu: [
      {
        title: 'Home',
        path: COMMON_ROUTES.HOME,
        className: 'classes.headerNavItem'
      },
      {
        title: 'About',
        path: COMMON_ROUTES.ABOUT,
        className: 'classes.headerNavItem'
      },
      {
        title: 'Contact',
        path: COMMON_ROUTES.CONTACT,
        className: 'classes.headerNavItem'
      }
    ]
  }
}
