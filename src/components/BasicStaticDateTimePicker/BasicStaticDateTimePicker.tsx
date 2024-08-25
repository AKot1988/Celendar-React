import { FC, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

const date = new Date('August 23, 2024');

const BasicStaticDateTimePicker: FC = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([dayjs(date), dayjs(date)]);
  useEffect(() => {console.log('value', value)}, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker defaultValue={dayjs(date)} onChange={(value) => setValue(value)} orientation="portrait" ampm={false}/>
    </LocalizationProvider>
  );
}

export default BasicStaticDateTimePicker;