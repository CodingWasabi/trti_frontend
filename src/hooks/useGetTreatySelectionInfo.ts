import { Theme } from '@/theme/Theme';

const useGetTreatySelectionInfo = (id: number) => {
  if (id === 1) {
    return {
      title: '숙소는',
      color: Theme.M_1,
    };
  } else if (id === 2 || id === 3) {
    return {
      title: '식사는',
      color: Theme.M_2,
    };
  } else if (id === 4 || id === 5 || id === 6) {
    return {
      title: '숙소는',
      color: Theme.M_3,
    };
  } else {
    return {
      title: '활동은',
      color: Theme.M_4,
    };
  }
};

export default useGetTreatySelectionInfo;
