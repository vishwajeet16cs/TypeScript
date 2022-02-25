// -----------------------85. Discriminated Unions-------------------

/* 
    type Animal=Bird| Horse;
    here hourse has> runningSpeed
    here bird has> flyingSpeed

    in function Animal we have to descriminat the speed
    is it flying speed or running speed 
    -so add a new props to interface type to descriminate
        type-hourse or type-bird
        using swich we chack the type of speed
        and accordeingly put the value 

*/

interface Horse{
    type:"hourse";//literal type
    runningSpeed:number;
}

interface Bird{
    type:"bird";
    flyingSpeed:number
}
type Animal=Bird| Horse;

function moveAnimal(animal:Animal){
    let speed:number;
    switch(animal.type){
        case 'bird':
            speed=animal.flyingSpeed;
            break;

        case 'hourse':
            speed=animal.runningSpeed
    }
    console.log("Moving with speed"+speed)
}

moveAnimal({type:'bird',flyingSpeed:10})
moveAnimal({type:'hourse',runningSpeed:20})