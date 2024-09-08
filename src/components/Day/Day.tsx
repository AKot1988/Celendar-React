import { FC } from "react";
import { useParams, Outlet } from "react-router-dom";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { dateToDisplay, DayDataProps, dateMapper} from "./helper";
import { AddButton } from "../index.tsx";
import classes from "./Day.module.scss";

const Day: FC<{ content: DayDataProps[] }> = ({ content }) => {
  const { currentUser, day } = useParams();
  content.sort((a, b) => {
    const dateA = new Date(a.begin);
    const dateB = new Date(b.begin);
    return dateA.getTime() - dateB.getTime();
  });
  return content.length > 0 ? (
    <>
      <div className={classes.day}>
        <div>
          <AddButton
            type="link"
            to={`${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/newTask`}
          />
          <p>{`Задачі на ${dateMapper(day)}`}</p>
        </div>
        {content.map((item: DayDataProps) => (
          <div key={item.id} className={classes.dayWrapper}>
            <div className={classes.dayItem}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{`Початок:  ${dateToDisplay(item.begin)}`}</p>
              <p>{`Завершення:  ${dateToDisplay(item.end)}`}</p>
              <p>{item.owner}</p>
              <p>{item.type}</p>
              <p>{item.priority}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <AddButton
        type="link"
        to={`${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/newTask`}
      />
      <p>На цей день задачі відсутні</p>
    </>
  );
};

export default Day;
