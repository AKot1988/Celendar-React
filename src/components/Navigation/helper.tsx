import { COMMON_ROUTES, ADMIN_ROUTES, USER_ROUTES } from '../../routes/routesNames';

export const adminLinks = [
  {to: COMMON_ROUTES.REGISTER, label: 'Register'}, 
  {to: COMMON_ROUTES.LOGIN, label: 'LogIn'}, 
  {to: COMMON_ROUTES.HOME, label: 'Home'},
  {to: COMMON_ROUTES.PRODUCTS, label: 'Products'},
  {to: ADMIN_ROUTES.USERS, label: 'Users'},
  {to: ADMIN_ROUTES.SESSIONS, label: 'Sessions'}
]

export const userLinks = [
  {to: COMMON_ROUTES.REGISTER, label: 'Register'}, 
  {to: COMMON_ROUTES.LOGIN, label: 'LogIn'}, 
  {to: COMMON_ROUTES.HOME, label: 'Home'},
  {to: COMMON_ROUTES.PRODUCTS, label: 'Products'},
  {to: USER_ROUTES.CART, label: 'Cart'}
]

export const guestLinks = [
  {to: COMMON_ROUTES.REGISTER, label: 'Register'}, 
  {to: COMMON_ROUTES.LOGIN, label: 'LogIn'}, 
  {to: COMMON_ROUTES.HOME, label: 'Home'},
  {to: COMMON_ROUTES.PRODUCTS, label: 'Products'}
]

