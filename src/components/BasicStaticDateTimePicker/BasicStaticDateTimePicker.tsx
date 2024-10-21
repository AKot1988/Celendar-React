import { FC } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import classes from "./BasicStaticDateTimePicker.module.scss";

type DatePickerProps = {
  initDate: string | Date; // similar to string "August 23, 2024"
  onAccept: (value: Dayjs | null) => void;
  onCancel?: () => void;
};

const BasicStaticDateTimePicker: FC<DatePickerProps> = ({
  onAccept = () => {},
  initDate = "",
  onCancel = () => {},
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        className={classes.datePicker}
        defaultValue={dayjs(initDate)}
        orientation="portrait"
        ampm={false}
        slotProps={{
          actionBar: {
            actions: ["cancel", "accept"],
          },
        }}
        onClose={() => {
          onCancel();
        }}
        onAccept={(val) => {
          onAccept(val);
        }}
        timezone="system"
        displayWeekNumber={false}
      />
    </LocalizationProvider>
  );
};

export default BasicStaticDateTimePicker;
