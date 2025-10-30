import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { User } from '@/types/user';

interface UserRowProps { 
  user: User; 
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export const UserRow = ({ 
  user, 
  onEdit, 
  onDelete
}: UserRowProps) => {
  return (
    <ListItem 
      secondaryAction={
        <>
          <IconButton 
            edge="end" 
            aria-label="edit" 
            onClick={() => onEdit(user)}
          >
            <EditIcon />
          </IconButton>

          <IconButton 
            edge="end" 
            aria-label="delete" 
            onClick={() => onDelete(user)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Avatar 
        alt={user.name} 
        src={(user as any).avatarUrl} 
        sx={{ mr: 2 }} 
      />

      <ListItemText 
        primary={user.name} 
        secondary={<a href={"mailto:" + user.email}>{user.email}</a>}
      />
    </ListItem>
  )
}
