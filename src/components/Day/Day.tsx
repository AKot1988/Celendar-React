import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTH_USER_ROUTES } from "../../router/routesNames";
import { setNewEvent } from '../../firebase/API';
import { MOUNTHS, PRIORITY } from '../../firebase/types';
import { AddButton } from '../index.tsx';
import classes from './Day.module.scss';

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
  console.log(day);
  
  return content.length > 0 ? (
    <div className={classes.day}>
      <AddButton
        action={async () => {
          await setNewEvent({
            date: {
              mounth: day?.split('_')[0] as MOUNTHS,
              year: day?.split('_')[2] as string,
              day: day?.split('_')[1] as string,
            },
            title: 'Project Meeting',
            begin: '10:00 AM',
            end: '11:00 AM',
            content: 'Discussion on the new project roadmap and milestones.',
            owner: currentUser as string,
            type: 'Meeting',
            priority: PRIORITY.HIGH,
            id: new Date().getTime().toString(),
          });
          console.log('Шляпа');
        }}
        // to={`${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day`}
        to=''
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
  ) : (
    <>
      <AddButton
        action={async () => {
          await setNewEvent({
            date: {
              mounth: day?.split('_')[0] as MOUNTHS,
              year: day?.split('_')[2] as string,
              day: day?.split('_')[1] as string,
            },
            title: 'Project Meeting',
            begin: '10:00 AM',
            end: '11:00 AM',
            content: 'Discussion on the new project roadmap and milestones.',
            owner: currentUser as string,
            type: 'Meeting',
            priority: PRIORITY.HIGH,
            id: new Date().getTime().toString(),
          });
          console.log('Шляпа');
        }}
        to=""
      />
      <p>На цей день задачі відсутні</p>
    </>
  );
};

export default Day;
