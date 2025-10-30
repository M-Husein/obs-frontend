import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSchemeProvider } from '../src/context/ColorSchemeContext';
import { Header } from '../src/components/Header';

beforeEach(() => { localStorage.clear() });

test('toggles theme and persists', async () => {
  render(
    <ColorSchemeProvider>
      <Header />
    </ColorSchemeProvider>
  );
  const toggleBtn = screen.getByTestId('theme-toggle');
  expect(localStorage.getItem('colorScheme')).toBe('light');
  await userEvent.click(toggleBtn);
  expect(localStorage.getItem('colorScheme')).toBe('dark');
})
