import { Dayjs } from "dayjs";

export const dateUniMapper = (dateString: Dayjs | string | Date)=>{
    return dateString.toString().split(" ").splice(0, 4).join("_")
}