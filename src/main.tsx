import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ColorSchemeProvider } from '@/context/ColorSchemeContext';
import { UserProvider } from '@/context/UserProvider';

import '@/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
