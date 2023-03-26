const 모음 = ['a', 'e', 'i', 'o', 'u'];

function solution(my_string) {
    return my_string.split('').filter(c => !모음.includes(c)).join('');
}