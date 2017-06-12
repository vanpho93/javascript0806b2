const arr = ['Android', 'iOS', 'NodeJS', 'ReactJS', 'React Native'];

// arr.push('PHP');
// arr.unshift('Java');

// arr.pop();
// arr.shift();

// arr.splice(2, 2);
arr.splice(3, 0, 'Javascript');

console.log(arr);

const arrNum = [2, 4, 5, 6, 7, 9, 2, 1];

//[2, 4, 6, 2]
const arrOutput = [];

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) arrOutput.push(arrNum[i]);
}

console.log(arrOutput);
