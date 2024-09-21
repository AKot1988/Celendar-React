import { FormProps, Method } from '../../components/UniversalForm/types.tsx';
import { InputType } from '../../components/Input/type.tsx';

import { AUTH_USER_ROUTES } from '../../router/routesNames';

export const profileEditProps: FormProps = {
    title: 'Edit Profile',
    action: `${AUTH_USER_ROUTES.PROFILE}/edit`,
    method: Method.POST,
    inputs: [
        {
            id: '1',
            type: InputType.TEXT,
            placeHolder: 'Name',
            value: '',
            name: 'name',
            required: true,
            label: 'Name',
            onFocus: () => console.log('Name field focused'),
        },
        {
            id: '2',
            type: InputType.DATE,
            placeHolder: 'select your birthdate',
            value: '',
            name: 'birthdate',
            required: true,
            label: 'Birthday',
            onFocus: () => console.log('Name field focused'),
        },
        {
            id: '3',
            type: InputType.TEXTAREA,
            placeHolder: 'Smth about you',
            value: '',
            name: 'about',
            required: true,
            label: 'Leave smth about you',
            onFocus: () => console.log('Name field focused'),
        },
        {
            id: '4',
            type: InputType.SELECT,
            placeHolder: 'Оберіть стать',
            value: 'Оберіть стать',
            name: 'gender',
            label: 'Оберіть стать',
            options: [
              {
                value: 'Чоловік',
                label: 'Чоловік',
              },
              {
                value: 'Жінка',
                label: 'Жінка',
              },
              {
                value: 'Неоприділився',
                label: 'Неоприділився',
              },
            ],
          },
    ],
    button: {
        text: 'Save',
    },
    redirect: AUTH_USER_ROUTES.PROFILE,
}