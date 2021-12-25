import React from 'react';

import { Link } from 'react-router-dom';

import LinkBar from '@/components/atomic/molecules/LinkBar';

import TravelHistory from '@/components/atomic/organisms/TravelHistory';

import { ITravelHistory, ITravelHistoryList } from '@/types/travelHistory';

import { Wrapper, GridWrapper } from './style';

const TravelHistoryList = ({ travelHistoryList }: ITravelHistoryList) => {
  return (
    <Wrapper>
      <LinkBar>Group</LinkBar>
      <GridWrapper>
        {travelHistoryList.map((history: ITravelHistory) => (
          <Link to={`/group/${history.id}`}>
            <TravelHistory
              key={history.id}
              src={history.src}
              alt="여행사진"
              title={history.title}
              startDate={history.startDate}
              endDate={history.endDate}
              location={history.location}
              participantsCount={history.participantsCount}
            />
          </Link>
        ))}
      </GridWrapper>
    </Wrapper>
  );
};

export default TravelHistoryList;
