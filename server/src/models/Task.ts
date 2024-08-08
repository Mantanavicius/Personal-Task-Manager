import mongoose from 'mongoose';

const Schema = mongoose.Schema
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please add a title"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"]
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps: true});



export default mongoose.model("Task", taskSchema);