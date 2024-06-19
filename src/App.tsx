import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './components/usersList/usersList';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users")
      .then((res) => {
        const { data: { users } } = res.data;
        setUsers(users);
      });
  }, []);

  return (
    <Container>
      <UsersList users={users} />
    </Container>
  );
}

export default App;
