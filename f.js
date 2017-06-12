function doSth(aFunc) {
    aFunc(1, 5); //console.log(1, 5); //add(1, 5)
}

// doSth(console.log);

function add(a, b) {
    console.log(a + b);
}

doSth(function(a, b) {
    console.log(a - b);
});
