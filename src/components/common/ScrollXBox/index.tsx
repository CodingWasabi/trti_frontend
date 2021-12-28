import React, { useState, useEffect, useRef } from 'react';

import { Wrapper } from './style';

export interface IScrollBoxProps {
  margin?: string;
  type: string;
}

interface IScrollXBoxComponentProps extends IScrollBoxProps {
  children: React.ReactNode;
}

const ScrollXBox = ({ margin = '0px', type, children }: IScrollXBoxComponentProps) => {
  const [paddingSize, setPaddingSize] = useState<number>(0);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.scrollWidth > ref.current.clientWidth) {
        {
          type === 'member'
            ? setPaddingSize((ref.current.scrollWidth - ref.current.clientWidth) * 2)
            : setPaddingSize((ref.current.scrollWidth - ref.current.clientWidth) * 1.45);
        }
      }
    }
  }, []);

  return (
    <Wrapper ref={ref} paddingSize={paddingSize} margin={margin}>
      {children}
    </Wrapper>
  );
};

export default ScrollXBox;
