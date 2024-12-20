import { FC } from "react";
import { NewEventData } from "../../firebase/types.tsx";
import { dateMapper } from "./helper.tsx";
import classes from "./Task.module.scss";

const Task: FC<NewEventData> = ({
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
        {dateMapper(begin)}
      </p>
      <p className={classes.expandedDayEnd}>
        <span className={classes.expandedDayRowsHeaders}> Кінець: </span>
        {dateMapper(end)}
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
