import { FC, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { Day } from '../../components';
import { AUTH_USER_ROUTES } from '../../router/routesNames';

// import DayDataProps from "../../components/Day/Day";
import { NewEventData } from "../../firebase/types.tsx";
import classes from './DayPage.module.scss';

const DayPage: FC = () => {
  const loaderData = useLoaderData() as NewEventData;
  const navigate = useNavigate();
  const [dayVisible, setDayVisible] = useState(true);
  if (!dayVisible) {
    setDayVisible(!dayVisible);
    navigate(AUTH_USER_ROUTES.CALENDAR);
  }

  return (
    <div className={classes.dayPage}>
      <Day content={loaderData} />
    </div>
  );
};

export default DayPage;
