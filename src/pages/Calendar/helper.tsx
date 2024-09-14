import { Dayjs } from "dayjs";

export const dateUniMapper = (dateString: Dayjs | string | Date) => {
  return dateString.toString().split(" ").splice(0, 4).join("_");
};

export const dayTaskColor = (priority: string | undefined) => {
  switch (priority) {
    case "low":
      return "linear-gradient(90deg, rgba(8,255,0,1) 30%, rgba(107,107,107,0) 82%, rgba(122,122,122,0) 100%)";
    case "medium":
      return "linear-gradient(90deg, rgba(255,245,0,1) 30%, rgba(107,107,107,0) 82%, rgba(122,122,122,0) 100%)";
    case "high":
      return "linear-gradient(90deg, rgba(255,0,0,1) 30%, rgba(107,107,107,0) 82%, rgba(122,122,122,0) 100%)";
    case "draft":
      return "linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(107,107,107,0) 82%, rgba(122,122,122,0) 100%)";
    default:
      return "linear-gradient(90deg, rgba(184,184,184,0.2863270308123249) 0%, rgba(181,179,181,0.8241421568627451) 50%, rgba(184,184,184,1) 100%)";
  }
};
