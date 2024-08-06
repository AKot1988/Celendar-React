import { FC } from "react";
import classes from "./Day.module.scss";

type DayDataProps = {
  content: any;
}

const Day: FC<DayDataProps> = ({content}) => {
  return (
    <div>
      {content.toString()}
    </div>
  );
}

export default Day;