import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import UserModal from '../userModal/userModal';
import './userCard.css';

interface UserCardProps {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  avatar: string;
  role: string;
}

const UserCard: React.FC<UserCardProps> = ({ firstname, lastname, description, avatar, role }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card className="card">
        <Box className="avatar-box">
          <Avatar
            style={{width:'120px', height:'120px'}}
            alt={`${firstname} ${lastname}`}
            src={avatar}
            className="avatar"
          />
        </Box>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" align="center">
            {firstname} {lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {description}
          </Typography>
        </CardContent>
        <Box className="button-box">
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            View More
          </Button>
        </Box>
      </Card>
      <UserModal
        open={modalOpen}
        onClose={handleCloseModal}
        user={{ firstname, lastname, description, avatar, role }}
      />
    </>
  );
};

export default UserCard;