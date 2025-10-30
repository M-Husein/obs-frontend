import { api } from './client';
import type { User } from '@/types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const data = await api.get('users.json').json<User[]>();
  return data.map(item => ({ ...item, avatarUrl: `https://picsum.photos/seed/user-${item.id}/200/200` } as any));
}
