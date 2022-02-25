console.log("hello from app");
/* 
    type Assertion
    -we know better then what ID understand
    Is of two form
    1> Angle-bracket;
    2> as-syntax
*/
//---------------------------------
let name1="vishwajeet"; //type string
let lengthname=name1.length;
console.log(lengthname)  
//---------------------------------



//---------------<Angle-Bracket>------------------
let lastname;//type any
lastname="singh";
let lengthlastName=(<string>lastname).length;
console.log(lengthlastName)//5

// Notes:-not recommended
// because we cant read it in tsx file
// compiler thin it is an jsx element instead of type assertion
//-------------------------------------------


//---------------------------as-syntax----------------
let lengLName=(lastname as string).length
console.log(lengLName)//5