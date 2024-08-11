export type NewUserFormData = {
  [key: string]: string
}

export enum PRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type NewEventData = {
  title?: string,
  begin: string,
  end: string,
  content?: string,
  owner: string,
  type?: string,
  priority?: PRIORITY,
}