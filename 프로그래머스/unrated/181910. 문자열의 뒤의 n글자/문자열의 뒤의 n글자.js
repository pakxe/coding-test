function solution(my_string, n) {
    return my_string.split('').splice(-n).join('');
}