import { FC } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

const date = new Date();

const BasicStaticDateTimePicker: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker defaultValue={dayjs(date)} />
    </LocalizationProvider>
  );
}

export default BasicStaticDateTimePicker;