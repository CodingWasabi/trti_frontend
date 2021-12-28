const size = {
  mobile: '480px',
  tablet: '600px',
  desktop: '1024px',
};

export const Theme = {
  M_1: '#FF7F8C',
  M_2: '#FFCE6C',
  M_3: '#6BE065',
  M_4: '#86C4F7',
  F_1: '#FFFFFF',
  F_2: '#A0A0A0',
  F_3: '#707070',
  F_4: '#191919',
  B_1: '#FBFBFB',
  B_2: '#F5F5F5',
  C_1: '#F83146',

  // responsive
  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
