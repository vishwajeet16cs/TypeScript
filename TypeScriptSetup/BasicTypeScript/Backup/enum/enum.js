"use strict";
/*
    enum in typeScript
    what is enum
    Make a program with enum
    use Enum with varible
    Use enum with Function
*/
var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["tue"] = "tue";
    Days["wed"] = "wed";
    Days["thu"] = "thu";
    Days["fri"] = "fri";
    Days["sat"] = "sat";
    Days["sun"] = "sun";
})(Days || (Days = {}));
let whichDay;
// whichDay="test"-->error TS2322: Type '"t for file changes.est"' is not assignable to type 'Days'.
whichDay = Days.mon;
console.log(whichDay); //0
whichDay = Days.tue;
console.log(whichDay); //1
// console.log(whichDay)//1
//-----------------------------------
function funWhichDay(day) {
    return day;
}
console.log("function", funWhichDay(Days.sun)); //sun
