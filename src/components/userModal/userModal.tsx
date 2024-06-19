import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  user: {
    firstname: string;
    lastname: string;
    description: string;
    avatar: string;
    role: string;
  };
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{user.firstname} {user.lastname}</DialogTitle>
      <DialogContent>
        <img src={user.avatar} alt={`${user.firstname} ${user.lastname}`} style={{ width: '100%', borderRadius: '8px' }} />
        <Typography variant="body1" gutterBottom>
          {user.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.role}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;