import { useState, ChangeEvent, FormEvent, FC } from 'react';
import axios from 'axios';
import { UpdateUserProps } from '@/Type/UpdateUserProps';

const UpdateUser: FC<UpdateUserProps> = ({ user, fetchUsers, setEditingUser }) => {
  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${user.id}`, { name, email });
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCancelEdit = () => {
    setName(user.name);
    setEmail(user.email);
    setEditingUser(null);
  };


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Update User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={handleNameChange}
          className="border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={handleEmailChange}
          className="border rounded-md py-2 px-3 mb-2"
        />
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Update User
          </button>
          <button
            type="button"
            onClick={handleCancelEdit}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
