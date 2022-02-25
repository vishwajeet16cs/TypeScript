function decorate(value: string |null|undefined){
    if(value==null){
        return value;
    }
    return `--${value.trim()}--`;
}
console.log(decorate("Hello"))//--Hello--
console.log(decorate("Hello World"))//--Hello World--
console.log(decorate(null))//null
console.log(decorate(undefined))//undefine
