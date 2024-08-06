import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"]
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;