import { useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import { useUserContext } from '@/context/UserProvider';
import { ConfirmModal } from '@/components/ConfirmModal';
import { UserRow } from './UserRow';
import { UserModal } from './UserModal';
import type { User } from '@/types/user';

interface UserListProps { 
  loading?: boolean; 
  error?: string | null;
}

export const UserList = ({ loading, error }: UserListProps) => {
  const { users, setUsers } = useUserContext();
  const [open, setOpen] = useState(false);
  const [dataConfirm, setDataConfirm] = useState<User | null>(null);
  const [editing, setEditing] = useState<User | undefined>(void 0);

  const changeEditing = (editingData: User | undefined) => { 
    setEditing(editingData); 
    setOpen(true); 
  }

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          p: 4 
        }}
      >
        <CircularProgress/>
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          mb: 2 
        }}
      >
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          onClick={() => changeEditing(void 0)}
        >
          Add User
        </Button>
      </Box>

      <List>
        {users.map(item => (
          <UserRow 
            key={item.id} 
            user={item} 
            onEdit={changeEditing} 
            onDelete={setDataConfirm}
          />
        ))}
      </List>

      <UserModal 
        open={open} 
        initialUser={editing} 
        onClose={() => setOpen(false)} 
      />

      <ConfirmModal
        label={dataConfirm?.name}
        open={!!dataConfirm} 
        onOk={() => {
          setUsers(prev => prev.filter(item => item.id !== dataConfirm?.id))
          setDataConfirm(null)
        }}
        onCancel={() => {
          setDataConfirm(null)
        }}
      />
    </Box>
  );
}
