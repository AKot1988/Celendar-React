import { FC, useEffect, useState } from 'react';
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
  return content ? (
    <div className={classes.day}>
      <AddButton
        action={async() => {
          await setNewEvent({
            date: {
              mounth: MOUNTHS.Aug,
              year: '2024',
              day: '11',
            },
            title: 'Project Meeting',
            begin: '10:00 AM',
            end: '11:00 AM',
            content: 'Discussion on the new project roadmap and milestones.',
            owner: 'John Doe',
            type: 'Meeting',
            priority: PRIORITY.HIGH,
            id: new Date().getTime().toString(),
          });
          console.log('Шляпа');
        }}
        to=""
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
    <p>Дані відсутні</p>
  );
};

export default Day;
