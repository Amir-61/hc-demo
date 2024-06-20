import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { User } from '../../types/UserCardProps';

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{user.firstname} {user.lastname}</DialogTitle>
      <DialogContent>
        <img src={user.avatar} alt={`${user.firstname} ${user.lastname}`} style={{borderRadius: '8px', objectFit: 'cover' }} />
        <Typography variant="body1" gutterBottom>
          Username: {user.username}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Role: {user.role}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join Date: {user.join_date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Description: {user.description}
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