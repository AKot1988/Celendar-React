export type NewUserFormData = {
  [key: string]: string
}

export enum PRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  POSSIBLE = 'possible',
}

export enum MOUNTHS {
  Jan = 'Jan',
  Feb = 'Feb',
  Mar = 'Mar',
  Apr = 'Apr',
  May = 'May',
  Jun = 'Jun',
  Jul = 'Jul',
  Aug = 'Aug',
  Sep = 'Sep',
  Oct = 'Oct',
  Nov = 'Nov',
  Dec = 'Dec',
}

export type DatePattern = {
  mounth: MOUNTHS,
  year: string,
  day: string,
}

export type NewEventData = {
  date?: DatePattern,
  title?: string,
  begin: string,
  end: string,
  description?: string,
  owner: string | undefined,
  type?: string,
  priority?: PRIORITY,
  id: string,
}