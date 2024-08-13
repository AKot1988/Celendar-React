import { FC, useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { UniversalModal, Day } from "../../components";
import { AUTH_USER_ROUTES } from '../../router/routesNames'
import { getEventsByDay } from "../../firebase/API";
import { DatePattern, MOUNTHS } from "../../firebase/types";

export function mockTimeOutFunction() {
  return new Promise((resolve, reject) => 
    setTimeout(() => resolve(<div>Дані відповідь</div>), 1000)
  );
}

const DayPage: FC = async() => {
  const loderData = useLoaderData()
  const navigate = useNavigate();
  const { currentUser, day } = useParams();
  const [dayVisible, setDayVisible] = useState(true);
  const currentDayDatePatern: DatePattern = {
    year: day?.split('_')[2] as string,
    mounth: day?.split('_')[0] as MOUNTHS,
    day: day?.split('_')[1] as string,
  }
  useEffect(() => {
    const dayData = async () => {
      const events = await getEventsByDay(currentDayDatePatern);
      // Тут ви можете працювати з отриманими подіями, наприклад, оновити стан компонента
      console.log(events); // Або, наприклад, setEvents(events);
    };
  
    dayData();
  }, []);
  if (!dayVisible) {
    navigate(AUTH_USER_ROUTES.CALENDAR)
  }



  return (
    <div>
      <UniversalModal content={<Day content={loderData}/>} visible={dayVisible} setVisible={setDayVisible} title={''}/>
    </div>
  );
}

export default DayPage;