const size = {
  mobile: '480px',
  desktop: '1024px',
};

export default {
  M_1: '#FF7F8C',
  M_2: '#FFCE6C',
  M_3: '#6BE065',
  M_4: '#86C4F7',
  F_1: '#FFFFFF',
  F_2: '#A0A0A0',
  F_3: '#707070',
  F_4: '#191919',

  // responsive
  mobile: `@media (max-width: ${size.mobile})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
