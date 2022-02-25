// ------------------Type Casting ------------------------

// const userInputElement=<HTMLInputElement>document.getElementById('user-input')!;
// may clase with react element tag <> because of the angular bracket

//alternative option
// const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = "Hi there!";


const userInputElement=document.getElementById('user-input');
if(userInputElement){
    (userInputElement as HTMLInputElement).value = "Hi there!";
}

/* 
    here (userInputElement as HTMLInputElement) valu be checket 1st
    then evaluate (userInputElement as HTMLInputElement).value 
*/