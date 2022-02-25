"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
// queue.push("data");-->Argumentg for file changes. of type 'string' is not assignable to parameter of type 'number'. 
queue.pop();
queue.pop();
queue.pop();
console.log(queue);
const q1 = new Queue();
q1.push("raj");
q1.push("mohan");
q1.push("sita");
q1.push("gita");
q1.pop();
console.log(q1);
// q1.push(1);-->error onli string alow
