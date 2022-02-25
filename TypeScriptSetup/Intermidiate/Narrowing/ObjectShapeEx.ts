type Square = {
    size:number,
}
 type Rectangle={
     width:number,
     height:number,
 };
 type shape = Square|Rectangle;

 function area(shape:shape){
        if('size' in shape){
            return shape.size*shape.size;
        }
        if('height' in shape){
            return shape.width*shape.height
        }
       
 }
 console.log(area({size: 2}))
 console.log(area({height:2,width:3}))