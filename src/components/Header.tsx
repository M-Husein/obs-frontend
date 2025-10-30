import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorScheme } from '@/context/ColorSchemeContext';

export const Header = () => {
  const { mode, toggle } = useColorScheme();

  return (
    <AppBar position="sticky">
      <Toolbar 
        style={{
          display: 'flex', 
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6" translate="no">
          {import.meta.env.VITE_TOKEN_KEY}
        </Typography>

        <IconButton 
          color="inherit" 
          onClick={toggle} 
          data-testid="theme-toggle"
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
