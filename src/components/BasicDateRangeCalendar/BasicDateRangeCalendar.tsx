import React, { FC, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const date = new Date();

const BasicDateRangeCalendar: FC = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs(date),
    dayjs(date),
  ]);
  useEffect(() => {
    console.log('value', value);
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDateRangeCalendar;
