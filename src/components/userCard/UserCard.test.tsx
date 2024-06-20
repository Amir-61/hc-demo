import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserModal from '../userModal/userModal';
import { User } from '../../types/UserCardProps';

const mockUser: User = {
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

test('renders UserModal component', async () => {
  await act(async () => {
    render(<UserModal open={true} onClose={() => {}} user={mockUser} />);
  });
  expect(screen.getByText(`${mockUser.firstname} ${mockUser.lastname}`)).toBeInTheDocument();
  expect(screen.getByText(`Username: ${mockUser.username}`)).toBeInTheDocument();
  expect(screen.getByText(`Email: ${mockUser.email}`)).toBeInTheDocument();
  expect(screen.getByText(`Role: ${mockUser.role}`)).toBeInTheDocument();
  expect(screen.getByText(`Join Date: ${mockUser.join_date}`)).toBeInTheDocument();
  expect(screen.getByText(`Description: ${mockUser.description}`)).toBeInTheDocument();
});

test('closes modal on button click', async () => {
  const handleClose = jest.fn();
  await act(async () => {
    render(<UserModal open={true} onClose={handleClose} user={mockUser} />);
  });
  const button = screen.getByText('Close');
  fireEvent.click(button);
  expect(handleClose).toHaveBeenCalled();
});