import { Dayjs } from "dayjs";

export const dateUniMapper = (dateString: Dayjs | string | Date)=>{
    return dateString.toString().split(" ").splice(0, 4).join("_")
}

export const dayTaskColor = (priority: string | undefined) => {
    switch (priority) {
        case "low":
            return "green";
        case "medium":
            return "orange";
        case "high":
            return "red";
        default:
            return "black";
    }
}