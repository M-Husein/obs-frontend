import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { UserForm } from './UserForm';
import { useInert } from '@/hooks/useInert';
import type { User } from '@/types/user';

interface UserModalProps { 
  open: boolean; 
  initialUser?: User; 
  onClose: () => void; 
}

export const UserModal = ({ 
  open, 
  initialUser,  
  onClose, 
}: UserModalProps) => {
  useInert(open);
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      fullWidth 
      maxWidth="sm"
    >
      <DialogTitle>
        {initialUser ? 'Edit user' : 'Add user'}
      </DialogTitle>
      <DialogContent>
        <UserForm 
          initialUser={initialUser} 
          onClose={onClose} 
          btn={<Button sx={{ mr: 2 }} onClick={onClose}>Cancel</Button>}
        />
      </DialogContent>
    </Dialog>
  )
}
