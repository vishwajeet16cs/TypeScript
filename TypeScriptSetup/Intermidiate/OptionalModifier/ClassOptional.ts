/* class One{
    x:number;
    y:number;
} 
const one = new One()
console.log(one.x)//error
*/
//here x and y is optional so it will not give error 
//or else initialization in mandatary in class 
// we can directly initalize the value or by constructor 
class Point{
    x?:number;
    y?:number;
}
const point = new Point()
console.log(point.x);// undefined

point.x=0;
console.log(point.x);//0
point.x=undefined;
console.log(point.x);//undefine
// point.x=null;//not allowed