import React from 'react';
import { Grid } from '@mui/material';
import UserCard from '../userCard/userCard';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  avatar: string;
  role: string;
}

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '24px' }}>
      {users.length > 0 ? (
        users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              id={user.id}
              firstname={user.firstname}
              lastname={user.lastname}
              description={user.description}
              avatar={user.avatar}
              role={user.role}
            />
          </Grid>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </Grid>
  );
}

export default UsersList;