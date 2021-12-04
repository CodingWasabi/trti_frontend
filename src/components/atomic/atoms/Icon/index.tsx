import React from 'react';

import * as icons from '@/components/atomic/atoms/Icon/icons';

type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
}

const Icon = ({ icon }: IIconProps) => {
  const IconComponent = icons[icon];
  return <IconComponent />;
};

export default Icon;
