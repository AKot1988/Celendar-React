import { InputElementProps } from '../Input/type';

export enum Method {
   POST = 'post',
   PUT = 'put',
   DELETE = 'delete'
}

export type FormProps = {
   title: string;
   action: string;
   method: Method;
   inputs: InputElementProps[];
   button: 
      {
         text: string;
         clickHandler: () => void;
      },
}