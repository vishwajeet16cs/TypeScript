// if some thing have been initalize runTime usually return undefine
let notDefine:undefined=undefined;
// if some this currently unavailable the runTime return -->null
let notPresent:null = null;

class Point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}
const center = new Point(0,0);
center.x=0;
// center.y=0;
console.log(center.x,center.y)// 0, undefine 

function logVowels(value:string){
    console.log(value.match(/[aeiou]/gi));
}
console.log(logVowels('hello'));//
// console.log("hello check")