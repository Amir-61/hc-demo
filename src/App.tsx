import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './components/usersList/usersList';
import { Container, CircularProgress, Box } from '@mui/material';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users")
      .then((res) => {
        const { data: { users } } = res.data;
        setUsers(users);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <UsersList users={users} />
      )}
    </Container>
  );
}

export default App;