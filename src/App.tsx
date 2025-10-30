import { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Header } from '@/components/Header';
import { HomePage } from '@/pages/HomePage';
import { useColorScheme } from '@/context/ColorSchemeContext';
import { getTheme } from '@/theme';

const ThemedApp = () => {
  const { mode } = useColorScheme();
  const theme = getTheme(mode);

  useEffect(() => {
    const loaderApp = (document.getElementById('loaderApp') as HTMLDivElement);
    if(loaderApp){
      loaderApp.hidden = true;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomePage />
    </ThemeProvider>
  )
}

export const App = () => <ThemedApp />;
