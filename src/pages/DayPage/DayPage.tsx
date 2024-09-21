import { FC, useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { Day } from '../../components';
import { AUTH_USER_ROUTES } from '../../router/routesNames';

import DayDataProps from "../../components/Day/Day";
import classes from './DayPage.module.scss';

const DayPage: FC = () => {
  const loderData = useLoaderData() as DayDataProps;
  const navigate = useNavigate();
  const [dayVisible, setDayVisible] = useState(true);
  if (!dayVisible) {
    navigate(AUTH_USER_ROUTES.CALENDAR);
  }

  return (
    <Day content={loderData} />
  );
};

export default DayPage;
