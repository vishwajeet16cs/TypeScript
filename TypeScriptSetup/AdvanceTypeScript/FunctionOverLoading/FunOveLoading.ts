function reverse(string: string):string
function reverse(string: string[]):string[]
function reverse(stringOrStringArray:string|string[]){
    if(typeof stringOrStringArray=='string'){
        return stringOrStringArray.split('').reverse().join('');
        //split convert string into array
        //join back it to an array
    }
    else{
        return stringOrStringArray.slice().reverse();
    }
}
const hello = reverse('hello')//'olleh'
const h_e_l_l_o=reverse(['h','e','l','l','o']);//
console.log(hello);
console.log(h_e_l_l_o);//[ 'o', 'l', 'l', 'e', 'h' ]

/* 
    before function over load hello & h_e_l_l_o 
    hello: string | string[]
    h_e_l_l_o: string | string[]

    After function over loading
    >hello: string
    >h_e_l_l_o: string[]

    -->problem resolve for showing incorrect type of both the variable
    function overloading is compileTime only means both these signature
    function reverse(string: string):string
    function reverse(string: string[]):string[]
    are not the part of output java script
    
*/