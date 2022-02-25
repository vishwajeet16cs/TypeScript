type Point={
    x:number,
    y:number,
}

function initialize(): Point {
    return {x:0,y:0}
}
const point = initialize()
console.log("After Initialized", point.x,point.y)//After Initialized 0 0

type Point1={
    x:number,
    y:number,
}
let point1:Point1;

function initializedvalue(){
    point1={x:0,y:0};
}

initializedvalue();
console.log("After initialized",point1!.x,point1!.y)//After initialized 0 0