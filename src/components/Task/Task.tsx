import { FC } from "react";
import  {DayDataProps} from "../Day/helper";
import classes from "./Task.module.scss";

const Task: FC<DayDataProps> = ({ title, begin, end, description, priority, photoURL }) => {
  return (
    <div className={classes.expandedDay}>
      <h1 className={classes.expandedDayTitle}>{title}</h1>
      <p className={classes.expandedDayBegin}>{begin}</p>
      <p className={classes.expandedDayEnd}>{end}</p>
      <p className={classes.expandedDayDescription}>{description}</p>
      <p className={classes.expandedDayPriority}>{priority}</p>
      {photoURL && <img className={classes.expandedDayPhoto} src={photoURL} alt="taskPhoto" />}
    </div>
  );
};

export default Task;
