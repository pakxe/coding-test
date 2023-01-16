function solution(s, n) {
  return s
    .split('')
    .map((c) => {
      if (c === ' ') return c;
      else return moveAlphabet(c, n);
    })
    .join('');
}
const moveAlphabet = (c, n) => {
  if (c === c.toLowerCase()) {
    return String.fromCharCode(((c.charCodeAt() - 97 + n) % 26) + 97);
  } else return String.fromCharCode(((c.charCodeAt() - 65 + n) % 26) + 65);
};