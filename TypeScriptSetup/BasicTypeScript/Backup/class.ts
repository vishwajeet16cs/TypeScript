/* 
    Class in typeScript
    Define a Class
    Create o on=bject for class
    Make property
    Make function
    Define data type of function and property 
    Define data type to params
*/
class App{
    name:string="amarjeet"
    constructor(name:string)
    {
      console.log(name)
    }
    getName():void
    {
      console.log(this.name)
    }
  
  }
  let a1=new App("vishwajeet");//vishwajeet
  console.log(a1);//App { name: 'amarjeet' }
  a1.getName()//amarjeet
  console.log(a1.name)//amarjeet