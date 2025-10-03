import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import lightTheme from './swap/theme';
import OurTeam from './swap/swap';

const theme = createTheme(); // You can customize the theme here if needed

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <OurTeam />
    </ThemeProvider>
  );
}

export default App;
