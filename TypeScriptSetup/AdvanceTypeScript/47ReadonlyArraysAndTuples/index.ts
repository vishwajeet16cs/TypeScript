function reverseSorted(input: number[]):number[]{
    return input.sort().reverse();
}

const start=[1,2,3,4,5,6,7]
const result =reverseSorted(start)
console.log(result);