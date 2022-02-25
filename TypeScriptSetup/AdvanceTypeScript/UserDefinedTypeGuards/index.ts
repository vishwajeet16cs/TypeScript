// type Square={
//     size:number,
// };
// type Rectangle={
//     width:number,
//     height:number,
// }
// type Circle={
//     radius:2
// }
// type Shape =Square| Rectangle|Circle
// function area(shape:Shape){
//     if('size' in shape){
//         return shape.size* shape.size
//     }
//     if("width" in shape){
//         return shape.height*shape.width
//     }
//     if("radius" in shape){
//         return Math.PI** shape.radius
//     }
//     const _ensure: never = shape;// to insure all value is there which is in shape
//     /* type Shape =Square| Rectangle|Circle */
//     return _ensure
// }
// console.log(area({size:3}))//9
// console.log(area({width:3,height:2}))//6
// console.log(area({radius:2}))//9.8696

//-----------------------------------------------------

type Square={
    size:number,
};
type Rectangle={
    width:number,
    height:number,
}
type Circle={
    radius:2
}
type Shape = Square|Rectangle|Circle

function isSquare(shape:Shape):shape is Square
{
    return 'size' in shape
}

function isRectangle(shape:Shape):shape is Rectangle{
    return 'width' in shape;
}
function isCircle(shape:Shape):shape is Circle{
    return 'radius' in shape;
}

function area(shape: Shape){
    if(isSquare(shape)){
        return shape.size*shape.size;
    }
    if(isRectangle(shape)){
        return shape.width*shape.height;
    }
    if(isCircle(shape)){
        return Math.PI** shape.radius
    }
    const _ensure:never=shape;
    return _ensure;
}