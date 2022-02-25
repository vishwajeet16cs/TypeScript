const delay =(ms:number)=>new Promise(res=>setTimeout(res,ms));
const mainAsync = async () =>{
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(1);
};
mainAsync();