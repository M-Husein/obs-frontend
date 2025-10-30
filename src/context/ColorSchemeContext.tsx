import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextValue {
  mode: ColorScheme
  toggle: () => void
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null);

const storageKey = 'colorScheme';

export const ColorSchemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ColorScheme>(() => (localStorage.getItem(storageKey) as ColorScheme) || 'light');

  const toggle = useCallback(
    () => setMode(prev => prev === 'dark' ? 'light' : 'dark'), 
    []
  );

  const value = useMemo(() => ({
    mode, 
    toggle, 
  }), [mode]);

  useEffect(() => {
    localStorage.setItem(storageKey, mode)
  }, [mode]);

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (import.meta.env.DEV && !context) {
    throw new Error('useColorScheme must be used within ColorSchemeProvider');
  }
  return context as ColorSchemeContextValue;
}
