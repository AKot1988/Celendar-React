import { FormProps, Method } from '../../components/UniversalForm/types.tsx';
import { InputType } from '../../components/Input/type.tsx';
import { AUTH_USER_ROUTES } from '../../router/routesNames';
import { imageDestination } from "../../firebase/types";


import { auth } from "../../firebase/firebase";
import { addFileToStorage } from "../../firebase/API";

export const profileEditProps: FormProps = {
    title: 'Edit your profile',
    action: `${AUTH_USER_ROUTES.PROFILE}/edit`,
    method: Method.POST,
    inputs: [
        {
            id: 'name',
            type: InputType.TEXT,
            placeHolder: 'Name',
            value: '',
            name: 'name',
            required: true,
            label: 'Name',
        },
        {
            id: 'birthdate',
            type: InputType.DATE,
            placeHolder: 'select your birthdate',
            value: '',
            name: 'birthdate',
            required: true,
            label: 'Birthday',
        },
        {
            id: 'about',
            type: InputType.TEXTAREA,
            placeHolder: 'Smth about you',
            value: '',
            name: 'about',
            required: true,
            label: 'Leave smth about you',
        },
        {
          id: "photo",
          label: "Add your photo",
          type: InputType.FILE,
          placeHolder: "tap to add photo",
          name: "avatar",
          value: "",
          required: false,
          imagePurpose: imageDestination.AVATAR,
          onChange: async (e) => {
            const downloadURL = await addFileToStorage({
              element: e.target as HTMLInputElement,
              userId: auth.currentUser?.uid,
              imagePurpose: imageDestination.AVATAR,
            });
            return downloadURL;
          },
        },
        {
            id: 'gender',
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