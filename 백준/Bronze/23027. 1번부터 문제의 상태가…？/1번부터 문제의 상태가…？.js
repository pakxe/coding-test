let input = require('fs').readFileSync('/dev/stdin').toString().trim();

if (input.includes('A')) {
    input = input.replace(/B|C|D|F/g, 'A');
} else if (input.includes('B')) {
    input = input.replace(/C|D|F/g, 'B');
} else if (input.includes('C')) {
    input = input.replace(/D|F/g, 'C');
} else {
    input = input.replace(/./g, 'A');
}

console.log(input);
