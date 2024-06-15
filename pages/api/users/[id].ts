import { NextApiRequest, NextApiResponse } from 'next';
import User from "../../Models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query: { id } } = req;

    if (typeof id !== 'string') {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    switch (method) {
        case 'GET':
            try {
                const user = await User.query().findById(id);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json(user);
            } catch (error) {
                console.error('Error fetching user:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;
        case 'PUT':
            try {
                const user = await User.query().patchAndFetchById(id, req.body);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json(user);
            } catch (error) {
                console.error('Error updating user:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;
        case 'DELETE':
            try {
                const rowsDeleted = await User.query().deleteById(id);
                if (rowsDeleted === 0) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ message: 'User deleted' });
            } catch (error) {
                console.error('Error deleting user:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};
