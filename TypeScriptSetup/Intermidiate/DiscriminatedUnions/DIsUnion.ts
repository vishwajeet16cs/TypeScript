type Square = {
    kind:'square',
    size:number,
}
type Circle = {
    kind:'circle',
    radius:number,
}
type Rectangle={
     kind:'rectangle',
     width:number,
     height:number,
 };
 type shape = Square|Rectangle|Circle;

 function area(shape:shape){
        if(shape.kind==='square'){
            return shape.size*shape.size;
        }
        if(shape.kind==='rectangle'){
            return shape.width*shape.height
        }
        if(shape.kind==="circle"){
            return Math.PI*(shape.radius**2);
        }
       
 }
 console.log(area({kind:'square',size: 2}))//4
 console.log(area({kind:'rectangle',height:2,width:3}))//6
 console.log(area({kind:'circle',radius:2}))//12.566370614359172