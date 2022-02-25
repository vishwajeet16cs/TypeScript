const strs={
    hello:'world',
    good:true
}

/* console.log(strs('hello'));//error
    This expression is not callable.
    Type '{ hello: string; }' has no call signatures. 
*/
console.log(strs['hello']);//world
console.log(strs['good']);//true

const nums={
    1337:'leet'
};
console.log(nums['1337'])//leet
console.log(nums[1337])//leet

type Dictionary={
    [key:string]:boolean,
}