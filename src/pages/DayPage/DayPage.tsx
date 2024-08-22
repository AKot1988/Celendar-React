import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { UniversalModal, Day } from '../../components';
import { AUTH_USER_ROUTES } from '../../router/routesNames';
import { DatePattern, MOUNTHS } from '../../firebase/types';
import { DayDataProps } from '../../components/Day/Day';

// const DayPage: FC = () => {
//   const loderData = useLoaderData();
//   const navigate = useNavigate();
//   const [dayVisible, setDayVisible] = useState(true);
//   if (!dayVisible) {
//     navigate(AUTH_USER_ROUTES.CALENDAR);
//   }

//   return (
//     <div>
//       <UniversalModal
//         content={<Day content={loderData as DayDataProps} />}
//         visible={dayVisible}
//         setVisible={setDayVisible}
//         title={''}
//       />
//     </div>
//   );
// };

// export default DayPage;

const DayPage: FC = () => {
  const loderData = useLoaderData();
  const navigate = useNavigate();
  const [dayVisible, setDayVisible] = useState(true);
  if (!dayVisible) {
    navigate(AUTH_USER_ROUTES.CALENDAR);
  }

  return (
    <Day content={loderData as DayDataProps} />
  );
};

export default DayPage;
