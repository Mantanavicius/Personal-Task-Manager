import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Task from '../models/Task';

export const tasks_get = async (req: Request, res: Response): Promise<void> => {
    try{
        const tasks = await Task.find().sort({completed: 1, createdAt: 1 });
        res.status(200).json(tasks);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const task_get = async (req: Request, res: Response): Promise<void> => {
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (err: any) {
    res.status(500).json({ message: err.message });
    }
};

export const tasks_post = async (req: Request, res: Response): Promise<void> => {
    const { title, description } = req.body;
    let emptyFields = [];
    if(!title) {
        emptyFields.push('title');
    }
    if(!description) {
        emptyFields.push('description');
    }
    if(emptyFields.length > 0) {
        res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
        return;
    }
    try {
        const task = await Task.create({ title, description });
        res.status(201).json(task);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
export const tasks_patch = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    console.log('id', id)
    console.log('Req body:', req.body)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid task ID' });
        return;
    }
    try{
        const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });
        if(!task) {
            res.status(404).json({ error: 'No such task' });
            return;
        }
        res.status(200).json(task);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

export const tasks_delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid task ID' });
        return;
    }
    try{
        const task = await Task.findOneAndDelete({ _id: id }, { ...req.body });
        if(!task) {
            res.status(404).json({ error: 'No such task' });
            return;
        }
        res.status(200).json(task);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}
