"use strict";
// Module in typeScript
// what is module
// make 2 file and make module
// us ethem in single file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
const Teacher_2 = require("./Teacher");
let teacher = new Teacher_1.default();
console.log(teacher.data);
let student = new Student_1.default();
console.log(student.data);
let read = new Teacher_2.Read();
console.log(read.data);
