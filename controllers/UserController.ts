import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

// Handler to fetch all users
export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll();
    res.json({ users });
}

// Handler to fetch a single user by ID
export const one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserService.findOne({ id: parseInt(id) });
    if (user) {
        return res.json({ user });
    } else {
        return res.json({ error: "User not found" });
    }
}
