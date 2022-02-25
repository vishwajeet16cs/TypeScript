const main=()=>{
    setTimeout(()=>{
        console.log(1)
        setTimeout(()=>{
            console.log(2)
            setTimeout(()=>{
                console.log(2)
            },1000)
        },1000)
    },1000)
}
main()