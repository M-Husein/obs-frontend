import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from '@/context/UserProvider';
import type { User } from '@/types/user';
import { UserSchema } from '@/types/user';

interface UserFormProps { 
  initialUser?: User; 
  btn?: React.ReactNode;
  onClose: () => void;
}

export const UserForm = ({ 
  initialUser, 
  btn, 
  onClose 
}: UserFormProps) => {
  const { setUsers } = useUserContext();

  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
    defaultValues: initialUser ?? { id: crypto.randomUUID(), name: '', email: '', phone: '', company: '' } as User
  });

  const onSubmit = (data: User) => {
    if (initialUser) {
      setUsers(prev => prev.map(item => (item.id === data.id ? { ...item, ...data } : item)))
    } else {
      setUsers(prev => [
        { 
          ...data, 
          avatarUrl: `https://picsum.photos/seed/user-${data.id}/200/200` 
        } as any, 
        ...prev 
      ])
    }

    onClose()
  }

  return (
    <Box 
      component="form" 
      noValidate
      onSubmit={handleSubmit(onSubmit)} 
      sx={{ 
        display: 'grid', 
        gap: 2, 
        mt: 1 
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField 
            {...field} 
            label="Name" 
            error={!!errors.name} 
            helperText={errors.name?.message as string | undefined} 
            required 
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField 
            {...field} 
            label="Email" 
            error={!!errors.email} 
            helperText={errors.email?.message as string | undefined} 
            required 
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => <TextField {...field} label="Phone" />}
      />

      <Controller
        name="company"
        control={control}
        render={({ field }) => <TextField {...field} label="Company" />}
      />

      <Box sx={{ textAlign: 'center' }}>
        {btn}

        <Button 
          type="submit"
          variant="contained"
        >
          {initialUser ? 'Save' : 'Add'}
        </Button>
      </Box>
    </Box>
  )
}
