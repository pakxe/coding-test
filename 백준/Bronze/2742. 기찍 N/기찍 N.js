var fs = require('fs');
var n = fs.readFileSync('/dev/stdin').toString().trim();

let str = '';
for(let i = n; i > 0; i--){
    str += i + '\n';
}
console.log(str);