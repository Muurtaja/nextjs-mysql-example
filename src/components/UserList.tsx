"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';
import CreateUser from './CreateUser';
import { User } from '@/Type/User';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <div>
          <a
            href="https://github.com/Muurtaja/nextjs-mysql-example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
      <CreateUser fetchUsers={fetchUsers} />
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 flex items-center justify-between">
            {editingUser && editingUser.id === user.id ? (
              <UpdateUser user={editingUser} fetchUsers={fetchUsers} setEditingUser={setEditingUser} />
            ) : (
              <UserCard user={user} handleEdit={handleEdit} fetchUsers={fetchUsers} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
