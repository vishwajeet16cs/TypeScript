function makeDate(timestamp:number):Date;
function makeDate(year:number, month:number,day:number):Date;
function makeDate(timetampOrYear:number,month?:number,day?:number):Date{
    if(month != null && day != null){
        return new Date(timetampOrYear,month,day);
    }
    else{
        return new Date(timetampOrYear)
    }
}
const doomsday = makeDate(2000,1,1)
const mydate = makeDate(2021,1,1)

const epoch = makeDate(0)
// const invalid = makeDate(2000,1/* Error:ignored */)//error
/* No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments. */

console.log("date here",doomsday)//2000-01-31T18:30:00.000Z
console.log("date here",mydate)//2021-01-31T18:30:00.000Z
console.log("date here",epoch)//1970-01-01T00:00:00.000Z

/* 
    return new Date(timetampOrYear,month-1,day);
    makeDate(2000,1,1)-->1999-12-31T18:30:00.000Z
    makeDate(2021,1,1)-->2020-12-31T18:30:00.000Z
    
    
*/