import { FC, useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { setNewEvent } from "../../firebase/API";
import { MOUNTHS, PRIORITY } from "../../firebase/types";
import { AddButton } from "../index.tsx";
import classes from "./Day.module.scss";

export type DayDataProps = {
  title: string;
  content: string;
  begin: string;
  end: string;
  owner: string;
  type: string;
  priority: string;
  id: string;
};

const Day: FC<{ content: DayDataProps[] }> = ({ content }) => {
  const { currentUser, day } = useParams();
  return content.length > 0 ? (
    <>
      <div className={classes.day}>
        <AddButton
          type="link"
          to={`${AUTH_USER_ROUTES.CALENDAR}/${currentUser}/${day}/newTask`}
        />
        {content.map((item: DayDataProps) => (
          <div key={item.id} className={classes.dayWrapper}>
            <div className={classes.dayItem}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{item.begin}</p>
              <p>{item.end}</p>
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
