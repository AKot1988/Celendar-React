import { FC, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const BasicDateDayCalendar: FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  useEffect(() => {
    console.log('value', value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}
export default BasicDateDayCalendar;