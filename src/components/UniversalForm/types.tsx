import { InputElementProps } from '../Input/type';
import { COMMON_ROUTES, AUTH_USER_ROUTES, ADMIN_ROUTES } from '../../router/routesNames';

export enum Method {
   POST = 'post',
   PUT = 'put',
   DELETE = 'delete'
}


export type FormProps = {
   title: string;
   action: COMMON_ROUTES | AUTH_USER_ROUTES | ADMIN_ROUTES | string;
   method: Method;
   inputs: InputElementProps[];
   button: 
      {
         text: string;
         clickHandler?: () => void;
      },
   redirect?: COMMON_ROUTES | AUTH_USER_ROUTES | ADMIN_ROUTES;
}