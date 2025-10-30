import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Name is required').trim(),
  email: z.email('Invalid email'),
  phone: z.string().min(5, 'Phone number required').optional(),
  company: z.string().trim().optional()
});

export type User = z.infer<typeof UserSchema>
