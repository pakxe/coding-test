function solution(s, skip, index) {
    const alphabets = new Array(26).fill(0).map((_, i) => i);
    const filterAlphabet = alphabets.filter(c => !skip.split('').includes(String.fromCharCode(c+97)));
    
    return s.split('').reduce((afterStr, curStr, i) => {
        const charToNum = curStr.charCodeAt() - 97; // 0~25로 바뀐 문자
        const skipAlphabet = filterAlphabet[(filterAlphabet.indexOf(charToNum) + index)%filterAlphabet.length];
        return afterStr+=String.fromCharCode(skipAlphabet+97);
    }, '')
}
/*
1. s[0] -26 으로 알파벳 인덱스를 구한다. 
2. skip을 제외한 알파벳 배열을 만들어서 건너뛰도록 한다.
3. s를 모두 순회할 때까지 반복한다.

*/