/* 
    enum in typeScript
    what is enum
    Make a program with enum
    use Enum with varible
    Use enum with Function
*/

enum Days{
    mon="mon",
    tue="tue",
    wed="wed",
    thu="thu",
    fri="fri",
    sat="sat",
    sun="sun",
}
let whichDay:Days;
// whichDay="test"-->error TS2322: Type '"t for file changes.est"' is not assignable to type 'Days'.
whichDay=Days.mon
console.log(whichDay)//0
whichDay=Days.tue
console.log(whichDay)//1
// console.log(whichDay)//1

//-----------------------------------
function funWhichDay(day:Days){
    return day
}
console.log("function",funWhichDay(Days.sun))//sun