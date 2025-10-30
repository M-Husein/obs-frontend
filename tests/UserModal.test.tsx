import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserModal } from '../src/components/UserModal';
import { UserProvider } from '../src/context/UserProvider';

test('renders modal and validates', async () => {
  render(
    <UserProvider>
      <UserModal open={true} onClose={() => {}} initialUser={undefined} />
    </UserProvider>
  );

  const btn = screen.getByRole('button', { name: /add/i });
  await userEvent.click(btn);
  // @ts-ignore
  expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
});
