/* type Add =(a:number,b:number)=>number 

 const add:Add=(a,b)=>{
    return a+b;
 } 
 //  add(9,"10")//Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
 add(2,3)//5
 */

 
/* 
 Both the syntex is correct and same 
 >type Add =(a:number,b:number)=>number
 > type Add ={(a:number,b:number):number}
 
 > interface Add ={(a:number,b:number):number}
 */  
 type Add ={
     (a:number,b:number):number 
     (a:number,b:number,c?:number):number 
     debugName?:string,
 }

 const add:Add=(a,b,c?:number)=>{
    return a+b+(c!=null?c:0);
 }
 console.log(add(1,2))//3
 console.log(add(1,2,3))//6
