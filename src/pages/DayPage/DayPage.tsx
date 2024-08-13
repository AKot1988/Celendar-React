import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { UniversalModal, Day } from '../../components';
import { AUTH_USER_ROUTES } from '../../router/routesNames';
import { getEventsByDay } from '../../firebase/API';
import { DatePattern, MOUNTHS } from '../../firebase/types';
import { DayDataProps } from '../../components/Day/Day';

const DayPage: FC = () => {
  const loderData = useLoaderData();
  const navigate = useNavigate();
  const [dayVisible, setDayVisible] = useState(true);
  if (!dayVisible) {
    navigate(AUTH_USER_ROUTES.CALENDAR);
  }

  return (
    <div>
      <UniversalModal
        content={<Day content={loderData as DayDataProps} />}
        visible={dayVisible}
        setVisible={setDayVisible}
        title={''}
      />
    </div>
  );
};

export default DayPage;
