"use client"
import { DeleteUserProps } from '@/Type/DeleteUserProps';
import axios from 'axios';
import { FC } from 'react';



const DeleteUser: FC<DeleteUserProps> = ({ userId, fetchUsers }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteUser;
