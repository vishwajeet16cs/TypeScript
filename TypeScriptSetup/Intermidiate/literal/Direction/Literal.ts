type Cardinaldirection='North'|'East'|'South'|'West';
let direction:Cardinaldirection;//let direction=Cardinaldirection;
direction="North"
// direction="north"//not allow
direction="East"
console.log("check first")

function move(distanceMeter:number,direction:Cardinaldirection){
    console.log(`Moving ${distanceMeter} meters towards ${direction}`)
}
// console.log(move(3,"North"))
// console.log(move(3,"South"))
move(3,"South")
move(3,"North")
move(3,"East")
/* 
    o/p
    oving 3 meters towards South                                          \TypeScript\literal\Direction>
    Moving 3 meters towards North
    Moving 3 meters towards East 

*/