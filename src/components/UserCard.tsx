"use client"
import { FC } from 'react';
import { User } from '@/Type/User';
import DeleteUser from './DeleteUser';

interface UserCardProps {
    user: User;
    fetchUsers: () => void;
    handleEdit: (user: User) => void;
}

const UserCard: FC<UserCardProps> = ({ user, fetchUsers, handleEdit }) => {
    return (
        <>
            <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
            </div>
            <div>
                <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                >
                    Edit
                </button>
                <DeleteUser userId={user.id} fetchUsers={fetchUsers} />
            </div>
        </>
    );
};

export default UserCard;
