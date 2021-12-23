import React from 'react';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import './Calendar.css';
import './DateRangePicker.css';

export interface ICalendar {
  date: Array<Date>;
  setDate: React.Dispatch<React.SetStateAction<Array<Date>>>;
}

const Calendar = ({ date, setDate }: ICalendar) => {
  return <DateRangePicker onChange={setDate} value={date} />;
};

export default Calendar;
