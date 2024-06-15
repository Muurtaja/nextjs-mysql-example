"use client"
import { useState, ChangeEvent, FormEvent, FC } from 'react';
import axios from 'axios';
import { CreateUserProps } from '@/Type/CreateUserProps';


const CreateUser: FC<CreateUserProps> = ({ fetchUsers }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', { name, email });
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Create New User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={handleNameChange} 
          className="border rounded-md py-2 px-3"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={handleEmailChange} 
          className="border rounded-md py-2 px-3"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
