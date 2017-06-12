function add (a, b) {
    //statement
    return a + b;
}

console.log(add(3, 4));



console.log(add('Hoc', ' NodeJS'));

function total(n) {
    // return 1 + 2 + 3 + ... + n
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(total(100));
