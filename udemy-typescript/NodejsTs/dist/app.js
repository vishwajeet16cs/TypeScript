"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser"); //middleware parse json we get from responce
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
//to connect running express application
app.use("/todos", todos_1.default); //req targetting diff url will not hendal
//Error handleing middleware
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
}); //error handeling middleware
app.listen(3000);
