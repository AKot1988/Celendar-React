import { FC, useState } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { UniversalModal, Day } from "../../components";
import { AUTH_USER_ROUTES } from '../../router/routesNames'

export function mockTimeOutFunction() {
  return new Promise((resolve, reject) => 
    setTimeout(() => resolve(<div>Дані відповідь</div>), 1000)
  );
}

const DayPage: FC = () => {
  const loderData = useLoaderData()
  const navigate = useNavigate();
  const { currentUser, day } = useParams();
  const [dayVisible, setDayVisible] = useState(true);
  if (!dayVisible) {
    navigate(AUTH_USER_ROUTES.CALENDAR)
  }

  console.log('UserID --> ', currentUser, 'Selected Day --> ', day);

  const dayContent = day

  return (
    <div>
      <UniversalModal content={<Day content={loderData}/>} visible={dayVisible} setVisible={setDayVisible} title={''}/>
    </div>
  );
}

export default DayPage;