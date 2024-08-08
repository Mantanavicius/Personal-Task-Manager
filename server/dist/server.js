"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//routes
app.use('/api/tasks', routes_1.default);
const URI = process.env.URI;
const PORT = process.env.PORT;
mongoose_1.default.connect(URI)
    .then(() => {
    app.listen(PORT);
    console.log('db connected');
})
    .catch((err) => console.log(err));
