import { InputType } from "../../components/Input/type";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { FormProps, Method } from "../../components/UniversalForm/types";
import { imageDestination } from "../../firebase/types";
import { addFileToStorage } from "../../firebase/API";
import { auth } from "../../firebase/firebase";

export const EditTaskFormConfig: FormProps = {
  title: "Edit Task",
  action: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/:id/edit`,
  method: Method.POST,
  inputs: [
    {
      id: "title",
      type: InputType.TEXT,
      placeHolder: "Task name",
      value: "",
      name: "title",
      required: true,
      label: "Title",
      onChange: () => "",
    },
    {
      id: "taskDescription",
      type: InputType.TEXTAREA,
      placeHolder: "Task description",
      value: "",
      name: "description",
      required: true,
      label: "Description",
      onChange: () => "",
    },
    {
      id: "begin",
      type: InputType.DATEPICKER,
      placeHolder: "Tap to select date",
      value: "",
      name: "begin",
      required: true,
      label: "Set begin date/time",
      onFocus: () => {},
    },
    {
      id: "end",
      type: InputType.DATEPICKER,
      placeHolder: "Tap to select date",
      value: "",
      name: "end",
      required: true,
      label: "Set end date/time",
      onFocus: () => {},
    },
    {
      id: "photo",
      type: InputType.FILE,
      placeHolder: "Choose file",
      value: "",
      name: "photoURL",
      required: false,
      label: "Chose photo",
      onChange: async (e) => {
        const downloadURL = await addFileToStorage({
          element: e.target as HTMLInputElement,
          userId: auth.currentUser?.uid,
          imagePurpose: imageDestination.EVENT,
        });
        return downloadURL;
      },
      imagePurpose: imageDestination.EVENT,
    },
    {
      id: "priority",
      type: InputType.SELECT,
      placeHolder: "Choose priority",
      value: "",
      name: "priority",
      options: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "Draft", value: "draft" },
      ],
      required: false,
      label: "Priority",
    },
    {
      id: "id",
      type: InputType.HIDDEN,
      placeHolder: "",
      value: "",
      name: "id",
      required: true,
      label: "",
      onFocus: () => {},
    },
  ],
  button: {
    text: "Edit event",
    clickHandler: () => {},
  },
};

enum Mounth {
  Aug = "August",
  Sep = "September",
  Oct = "October",
  Nov = "November",
  Dec = "December",
  Jan = "January",
  Feb = "February",
  Mar = "March",
  Apr = "April",
  May = "May",
  Jun = "June",
  Jul = "July",
}
export const dateMapper = (date: string) => {
  let mappedDate = "";
  const mounth = Mounth[date.split("_")[1] as keyof typeof Mounth];
  const day = date.split("_")[2];
  const year = date.split("_")[3];
  mappedDate = `${mounth} ${day}, ${year}`;
  return mappedDate;
};
