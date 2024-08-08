"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks_delete = exports.tasks_patch = exports.tasks_post = exports.task_get = exports.tasks_get = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Task_1 = __importDefault(require("../models/Task"));
const tasks_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find().sort({ completed: 1, createdAt: 1 });
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_get = tasks_get;
const task_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findById(req.params.id);
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.task_get = task_get;
const tasks_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    let emptyFields = [];
    if (!title) {
        emptyFields.push('title');
    }
    if (!description) {
        emptyFields.push('description');
    }
    if (emptyFields.length > 0) {
        res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
        return;
    }
    try {
        const task = yield Task_1.default.create({ title, description });
        res.status(201).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_post = tasks_post;
const tasks_patch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log('id', id);
    console.log('Req body:', req.body);
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid task ID' });
        return;
    }
    try {
        const task = yield Task_1.default.findOneAndUpdate({ _id: id }, Object.assign({}, req.body));
        if (!task) {
            res.status(404).json({ error: 'No such task' });
            return;
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_patch = tasks_patch;
const tasks_delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid task ID' });
        return;
    }
    try {
        const task = yield Task_1.default.findOneAndDelete({ _id: id }, Object.assign({}, req.body));
        if (!task) {
            res.status(404).json({ error: 'No such task' });
            return;
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_delete = tasks_delete;
