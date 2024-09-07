import { Dayjs } from "dayjs";

export const dateUniMapper = (dateString: Dayjs | string | Date) => {
  return dateString.toString().split(" ").splice(0, 4).join("_");
};

export const dayTaskColor = (priority: string | undefined) => {
  switch (priority) {
    case "low":
      return "linear-gradient(90deg, rgba(51,150,0,0.5804446778711485) 0%, rgba(0,235,11,0.8241421568627451) 50%, rgba(67,244,57,1) 100%)";
    case "medium":
      return "linear-gradient(90deg, rgba(0,18,150,0.5804446778711485) 0%, rgba(0,32,235,0.8241421568627451) 50%, rgba(57,80,244,1) 100%)";
    case "high":
      return "linear-gradient(90deg, rgba(150,0,0,0.5804446778711485) 0%, rgba(235,0,0,0.8241421568627451) 50%, rgba(244,57,57,1) 100%)";
    case "draft":
      return "linear-gradient(90deg, rgba(136,0,138,0.5804446778711485) 0%, rgba(232,0,235,0.8241421568627451) 50%, rgba(242,57,244,1) 100%)";
    default:
      return "linear-gradient(90deg, rgba(184,184,184,0.2863270308123249) 0%, rgba(181,179,181,0.8241421568627451) 50%, rgba(184,184,184,1) 100%)";
  }
};
