
export{}
function add (n1:number,n2:number):number{
      return n1+n2
  }

  function printResult(num:number):void{
      console.log("Result :" + num)
      return
  }
  
  printResult(53)
  console.log(printResult(53))//undefine

  let combineValues :(a:number,b:number)=>number
  combineValues = add;
  //combineValues=5//Type 'number' is not assignable to type 'Function'
//   combineValues=printResult//Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
//   Type 'void' is not assignable to type 'number'

  console.log(combineValues(8,8))

