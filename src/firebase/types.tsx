import { Timestamp, DocumentReference } from "firebase/firestore";

export type NewUserFormData = {
  [key: string]: string | undefined | number;
};

export type userDataProps = {
  name: string;
  birthdate: string;
  about?: string;
  email: string;
  password: string;
  updated_at: string | Timestamp | number;
  created_at: string | Timestamp | number;
  role: string;
  gender: string;
  events: string | DocumentReference;
  photoURL?: string;
  avatar?: string;
};

export enum USERCREATETYPE {
  CREATE = "create",
  EDIT = "edit",
}

export enum PRIORITY {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  POSSIBLE = "possible",
}

export enum MOUNTHS {
  Jan = "Jan",
  Feb = "Feb",
  Mar = "Mar",
  Apr = "Apr",
  May = "May",
  Jun = "Jun",
  Jul = "Jul",
  Aug = "Aug",
  Sep = "Sep",
  Oct = "Oct",
  Nov = "Nov",
  Dec = "Dec",
}

export enum UKRMOUNTS {
  Jan = "Січня",
  Feb = "Лютого",
  Mar = "Березня",
  Apr = "Квітня",
  May = "Травня",
  Jun = "Червня",
  Jul = "Липня",
  Aug = "Серпня",
  Sep = "Вересня",
  Oct = "Жовтня",
  Nov = "Листопада",
  Dec = "Грудня",
}

export enum WEEKDAYS {
  Mon = "Понеділок",
  Tue = "Вівторок",
  Wed = "Середа",
  Thu = "Четвер",
  Fri = "П'ятниця",
  Sat = "Субота",
  Sun = "Неділя",
}

export type DatePattern = {
  mounth: MOUNTHS;
  year: string;
  day: string;
};

export type NewEventData = {
  title?: string;
  description?: string;
  begin: string;
  end: string;
  owner: string | undefined;
  type?: string;
  priority?: PRIORITY;
  id: string;
  photoURL?: string;
};

export enum imageDestination {
  AVATAR = "UsersAvatars/",
  EVENT = "EventsImages/",
}

export type addFileToStorageProps = {
  element: HTMLInputElement;
  userId: string | undefined;
  imagePurpose: imageDestination;
};
