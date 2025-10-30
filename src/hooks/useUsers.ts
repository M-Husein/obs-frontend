import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/users'

export const QUERY_KEY = ['users']

export const useUsersQuery = () => {
  return useQuery(QUERY_KEY, fetchUsers, { staleTime: 1000 * 60 * 5 })
}
