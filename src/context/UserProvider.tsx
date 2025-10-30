import { createContext, useContext, useState } from 'react';
import type { User } from '@/types/user';

type UserContextType = {
  users: User[]
  setUsers: (next: User[] | ((prev: User[]) => User[])) => void
}

const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (import.meta.env.DEV && !context) {
    throw new Error('useUserContext must be used inside UserProvider');
  }
  return context as UserContextType;
}

export const UserProvider = ({ children, initial = [] as User[] }: { children: React.ReactNode; initial?: User[] }) => {
  const [users, setUsers] = useState<User[]>(initial);
  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
}
