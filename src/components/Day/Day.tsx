import { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Day.module.scss';

type DayDataProps = {
  content: any;
};

const Day: FC<DayDataProps> = ({ content }) => {
 return <div>{content}</div>;
};

export default Day;
