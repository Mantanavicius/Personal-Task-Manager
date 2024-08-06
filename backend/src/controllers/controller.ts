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
        res.status(500).json({ message: err.message });
    }
};

export const tasks_delete = async (req: Request, res: Response): Promise<void> => {
   try{
       const deleted = await Task.findByIdAndDelete(req.params.id);
       res.json(deleted);
   } catch (err: any) {
       res.status(500).json({ message: err.message });
   }
}

export const tasks_put = async (req: Request, res: Response): Promise<void> => {
   try{
       const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
       res.json(updated);
   } catch (err: any) {
       res.status(500).json({ message: err.message });
   }
}