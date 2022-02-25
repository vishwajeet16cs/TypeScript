export type SumArgs ={
    firstArgument:number,
    secondArgument:number
}
// this file only contain type defination we cant have value there
// const a:number//not allowed
// Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.

export type emp={
    name:string,
    roll:number
}

export function multiNumber(a:number,y:number):number
export type namefirst=string
export type namelast=string
// export function multiNumber(a:number,y:number):number{}
// A function whose declared type is neither 'void' nor 'any' must return a value.