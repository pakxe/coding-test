const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

input.shift();
let set = new Set(input);
let arr = [...set];

arr.sort(function(a, b) {
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    if(a.length === b.length) {
        if(a < b) return -1;
        if(a > b) return 1;
        if(a === b) return 0;
    }
});

arr.forEach(e=>{
    console.log(e);
    
})