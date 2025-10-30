import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useUsersQuery } from '@/hooks/useUsers';
import { useUserContext } from '@/context/UserProvider';
import { UserList } from '@/components/UserList';

export const HomePage = () => {
  const { data, isLoading, isError } = useUsersQuery();
  const { setUsers } = useUserContext();

  useEffect(() => {
    if (data) setUsers(data as any)
  }, [data, setUsers]);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          translate="no"
        >
          {import.meta.env.VITE_TOKEN_KEY}
        </Typography>

        <UserList 
          loading={isLoading} 
          error={isError ? 'Failed to load' : null} 
        />
      </Box>
    </Container>
  )
}
