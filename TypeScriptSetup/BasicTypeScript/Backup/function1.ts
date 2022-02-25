
type Add=(a:number,b:number)=>number;
let add:Add;
add=function(a,b){
  return a+b;
}
// add ("10",20)//error
add (10,20)//30