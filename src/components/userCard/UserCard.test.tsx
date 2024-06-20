import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import UserCard from './userCard';

const mockUser = {
  id: 1,
  username: 'johndoe',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/150',
  role: 'Developer',
  join_date: '1/1/2021',
  description: 'Test description',
};

test('renders UserCard component', () => {
  render(<UserCard {...mockUser} />);
  expect(screen.getByText(`${mockUser.firstname} ${mockUser.lastname}`)).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();
});

test('opens modal on button click', async () => {
  await act(async () => {
    render(<UserCard {...mockUser} />);
  });
  const button = screen.getByText('View More');
  fireEvent.click(button);
  expect(screen.getByText('Close')).toBeInTheDocument();
});