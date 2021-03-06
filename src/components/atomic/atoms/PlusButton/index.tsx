import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@/components/atomic/atoms/Icon';
import Button from '@/components/atomic/atoms/Button';

import { PositionWrapper } from './style';

const PlusButton = () => {
  return (
    <Link to="/group/create">
      <PositionWrapper>
        <Button
          backgroundColor="#FFFFFF"
          borderRadius="50%"
          width="40px"
          height="40px"
          boxShadow="0px 1px 4px rgba(62, 62, 62, 0.15)">
          <Icon icon="Plus" />
        </Button>
      </PositionWrapper>
    </Link>
  );
};

export default PlusButton;
