import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { dateToDisplay, DayDataProps, dateMapper, SVG } from "./helper";
import { deleteEventAction } from "../../firebase/API";
import { AddButton } from "../index.tsx";
import { dayTaskColor } from "../../pages/Calendar/helper";
import classes from "./Day.module.scss";
import { NewEventData } from "../../firebase/types.tsx";



const Day: FC<{ content: DayDataProps[] }> = ({ content }) => {
  const navigate = useNavigate();
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
          <h2>{`Задачі на ${dateMapper(day as string)}`}</h2>
        </div>
        <div className={classes.dayWrapper}>
          {content.map((item: DayDataProps) => (
            <div
              key={item.id}
              className={classes.dayItem}
              style={{
                background: dayTaskColor(item.priority),
              }}
              onClick={() => {
                console.log("open page with extended info");
              }}
            >
              <h3>{item.title}</h3>
              <p>{`Початок:  ${dateToDisplay(item.begin)}`}</p>

              <p>{item.priority}</p>
              <div className={classes.dayEditToolsContainer}>
                <SVG
                  onClick={(ev) => {
                    ev.stopPropagation();
                    navigate(
                      `${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/${item.id}/edit`
                    );
                  }}
                  className={classes.dayEditTools}
                  type="edit"
                />
                <SVG
                  onClick={(ev) => {
                    ev.stopPropagation();
                    const confirmation = confirm(`"Видалити " ${item.title}`);
                    if (confirmation) {
                      deleteEventAction(item as NewEventData);
                    }
                    navigate(
                      `${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}`
                    );
                  }}
                  className={classes.dayEditTools}
                  type="trash"
                />
              </div>
            </div>
          ))}
        </div>
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
