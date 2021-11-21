import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from '@/Router';

import AppLayout from '@/components/common/AppLayout';

import { GlobalStyles } from '@/theme/GlobalStyle';
import { Theme } from '@/theme/Theme';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <AppLayout>
          <Router />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
