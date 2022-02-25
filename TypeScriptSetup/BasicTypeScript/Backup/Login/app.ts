// Module in typeScript
// what is module
// make 2 file and make module
// us ethem in single file

import SLogin from './Student'
import TLogin from './Teacher'
import {Read} from './Teacher'
let teacher = new TLogin();
console.log(teacher.data)


let student = new SLogin();
console.log(student.data)

let read = new Read();
console.log(read.data)