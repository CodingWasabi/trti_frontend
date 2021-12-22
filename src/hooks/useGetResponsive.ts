import React, { useState, useEffect } from 'react';

const useGetResponsive = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
  }, []);

  return size;
};

export default useGetResponsive;
