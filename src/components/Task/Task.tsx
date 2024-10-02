import { FC } from "react";
import { DayDataProps } from "../Day/helper";
import classes from "./Task.module.scss";

const Task: FC<DayDataProps> = ({
  title,
  begin,
  end,
  description,
  priority,
  photoURL,
}) => {
  return (
    <div className={classes.expandedDay}>
      <h3 className={classes.expandedDayTitle}>{title}</h3>
      <p className={classes.expandedDayBegin}>
        <span className={classes.expandedDayRowsHeaders}> Початок: </span>
        {begin}
      </p>
      <p className={classes.expandedDayEnd}>
        <span className={classes.expandedDayRowsHeaders}> Кінець: </span>
        {end}
      </p>
      <p className={classes.expandedDayDescription}>
        <span className={classes.expandedDayRowsHeaders}>
          {" "}
          Детальний опис:{" "}
        </span>
        {description}
      </p>
      <p className={classes.expandedDayPriority}>
        <span className={classes.expandedDayRowsHeaders}>
          {" "}
          Важливість таски:{" "}
        </span>
        {priority}
      </p>
      {photoURL && (
        <img
          className={classes.expandedDayPhoto}
          src={photoURL}
          alt="taskPhoto"
        />
      )}
    </div>
  );
};

export default Task;
