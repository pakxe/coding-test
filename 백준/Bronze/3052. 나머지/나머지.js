let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let arr = [];
for(let i = 0; i < 10; i++){
    arr.push(Number(input[i]));
}

//let arr = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
let newarr = arr.map((a) => a % 42);
newarr.sort((a, b)=> a-b); //오름차순

let count = 1;
for(let i = 1; i < 10; i++){
    if(newarr[i-1] !==newarr[i] ){
        count++;
    }
}
console.log(count);