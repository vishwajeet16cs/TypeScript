var main = function () {
    setTimeout(function () {
        console.log(1);
        setTimeout(function () {
            console.log(2);
            setTimeout(function () {
                console.log(2);
            }, 1000);
        }, 1000);
    }, 1000);
};
main();
