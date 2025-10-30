import React from 'react'
import { render, screen } from '@testing-library/react'
import UserModal from '../src/components/UserModal'
import userEvent from '@testing-library/user-event'

test('renders modal and validates', async () => {
  render(<UserModal open={true} onClose={()=>{}} initialUser={undefined} />)
  const add = screen.getByText(/add user/i) || screen.getByText(/save/i) 
  // try to submit without filling: click Add button inside (label 'Add' is in form)
  const btn = screen.getByRole('button', { name: /add/i })
  await userEvent.click(btn)
  // validation messages should appear (Name and Email). We check for presence of 'Invalid' or 'required' or similar
  expect(await screen.findByText(/Name is required/i)).toBeInTheDocument()
}, 30000)
