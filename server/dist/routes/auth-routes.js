import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const router = Router();
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
        const token = jwt.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
        return;
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
};
// Add the login route to the router
router.post('/login', login);
// Default export the router
export default router;
