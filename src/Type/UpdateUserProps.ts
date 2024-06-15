import { User } from "./User";

export interface UpdateUserProps {
    user: User;
    fetchUsers: () => void;
    setEditingUser: (user: User | null) => void;
}