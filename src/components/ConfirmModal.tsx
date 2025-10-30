import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useInert } from '@/hooks/useInert';

interface ConfirmModalProps { 
  label?: string;
  open: boolean; 
  onOk: () => void; 
  onCancel: () => void; 
}

export const ConfirmModal = ({ 
  label, 
  open, 
  onOk, 
  onCancel, 
}: ConfirmModalProps) => {
  useInert(open);
  
  return (
    <Dialog 
      open={open} 
      onClose={onCancel} 
      fullWidth 
      maxWidth="xs"
    >
      <DialogContent>
        Are you sure to delete {label || 'this data'}?
      </DialogContent>
      <DialogActions>
        <Button onClick={onOk}>Yes</Button>
        <Button onClick={onCancel}>No</Button>
      </DialogActions>
    </Dialog>
  )
}
