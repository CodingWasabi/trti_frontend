import React from 'react';

import GroupInfoBox from '@/components/atomic/molecules/GroupInfoBox';
import Calendar, { ICalendar } from '@/components/Calendar';

const GroupInfoCalendar = ({ date, setDate }: ICalendar) => {
  return (
    <GroupInfoBox icon="Calendar">
      <Calendar date={date} setDate={setDate} />
    </GroupInfoBox>
  );
};

export default GroupInfoCalendar;
