type Person={
    name:string,
    email:string,
    phone?:string
};

const bruce: Person={
    name:"vishwajeet",
    email:"vishwajeet@gmail.com",
    phone:"123456"
}
const vish: Person={
    name:"vishwajeet",
    email:"vishwajeet@gmail.com",
}
const vishUndefine: Person={
    name:"vishwajeet",
    email:"vishwajeet@gmail.com",
    phone:undefined
}
const vishOtherType: Person={
    name:"vishwajeet",
    email:"vishwajeet@gmail.com",
    // phone:1234// not allowed
}
/* 
    here in above example phone is optional 
    optionl variable can also contain undefine othere then type aassigned
    
*/