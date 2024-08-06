import { Request, Response } from 'express';
import Task from '../models/Task';

export const tasks_get = async (req: Request, res: Response): Promise<void> => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const tasks_post = async (req: Request, res: Response): Promise<void> => {
    const { title, description } = req.body;

    try {
        const task = await Task.create({ title, description });
        res.status(201).json(task);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};