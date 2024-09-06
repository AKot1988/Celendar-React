import { InputType } from "../../components/Input/type";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { FormProps, Method } from "../../components/UniversalForm/types";

export const NewTaskFormConfig: FormProps = {
  title: "New Task",
  action: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/newTask`,
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
      onChange: () => console.log("Title changed"),
    },
    {
      id: "taskDescription",
      type: InputType.TEXTAREA,
      placeHolder: "Task description",
      value: "",
      name: "taskDescription",
      required: true,
      label: "Description",
      onChange: () => console.log("Description changed"),
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
      id: "priority",
      type: InputType.SELECT,
      placeHolder: "Choose priority",
      value: "",
      name: "priority",
      options: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "На вчора", value: "на вчора" },
      ],
      required: false,
      label: "Priority",
    },
  ],
  button: {
    text: "Add event",
    clickHandler: () => console.log("Create task"),
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
  const mounth = Mounth[date.split("_")[0] as keyof typeof Mounth];
  const day = date.split("_")[1];
  const year = date.split("_")[2];
  mappedDate = `${mounth} ${day}, ${year}`;
  return mappedDate;
};
