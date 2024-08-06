"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const dbURI = "mongodb+srv://mantanavicius:PwvHP9zq42gGXaKE@cluster0.iisjwpx.mongodb.net/task-buddy";
mongoose_1.default.connect(dbURI)
    .then((result) => {
    app.listen(3000);
    console.log('db connected');
})
    .catch((err) => console.log(err));
//routes
app.get('/', (req, res) => {
    res.send('hello');
});
