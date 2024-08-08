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
exports.tasks_put = exports.tasks_delete = exports.tasks_post = exports.tasks_get = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const tasks_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find();
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_get = tasks_get;
const tasks_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    try {
        const task = yield Task_1.default.create({ title, description });
        res.status(201).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_post = tasks_post;
const tasks_delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Task_1.default.findByIdAndDelete(req.params.id);
        res.json(deleted);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_delete = tasks_delete;
const tasks_put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.tasks_put = tasks_put;
