import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { RootState } from './store';

function App() {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* 提供css样式 */}
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
