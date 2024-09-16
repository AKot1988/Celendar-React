export type NewUserFormData = {
  [key: string]: string;
};

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
  Jan = "Січеня",
  Feb = "Лютого",
  Mar = "Березеня",
  Apr = "Квітеня",
  May = "Травеня",
  Jun = "Червня",
  Jul = "Липеня",
  Aug = "Серпеня",
  Sep = "Вересеня",
  Oct = "Жовтеня",
  Nov = "Листопада",
  Dec = "Груденя",
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
};
