import { FC, useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

type DatePickerProps = {
  initDate: string; // similar to string "August 23, 2024"
  onAccept: (value: DateRange<Dayjs>) => void;
};


const BasicStaticDateTimePicker: FC<DatePickerProps> = ({onAccept=()=> {}, initDate=''}) => {
  // const [value, setValue] = useState<DateRange<Dayjs>>([
  //   dayjs(date),
  //   dayjs(date),
  // ]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        defaultValue={dayjs(initDate)}
        // onChange={(value) => setValue(value)}
        orientation="portrait"
        ampm={false}
        onAccept={(val) => {onAccept(val)}}
      />
    </LocalizationProvider>
  );
};

export default BasicStaticDateTimePicker;
