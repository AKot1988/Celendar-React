import { COMMON_ROUTES, AUTH_USER_ROUTES } from "../../router/routesNames"
const authorizedUserLogo = 'https://img.freepik.com/free-vector/hand-drawn-cat-logo-template_23-2150503762.jpg?w=1800&t=st=1719493737~exp=1719494337~hmac=53ba09b81355b3d035c3fdbad0dec82eaebfa85bd7a78fa1f8499cfe119065f5'
const guestLogo = 'https://img.freepik.com/free-vector/cat-logo-design-template_23-2150438262.jpg?w=1800&t=st=1719485426~exp=1719486026~hmac=691139a947e7dbfbe8e46ef5c00f2ff671722545677a5a9ac28115e79db62a7b'
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
