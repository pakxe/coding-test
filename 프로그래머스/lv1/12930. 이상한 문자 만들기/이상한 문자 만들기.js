function solution(s) {
   return s.split(' ').map(word => word.split('').map((c, i) => reverseAlphabet(c, i)).join('')).join(' ');
}

const reverseAlphabet = (c, i) => {
    if(i % 2 === 0) return c === c.toUpperCase() ? c : c.toUpperCase();
    else return c === c.toLowerCase() ? c : c.toLowerCase();
}