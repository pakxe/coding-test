function solution(phone_number) {
    return phone_number.split("").reverse().map((number, i) => i < 4 ? number : '*').reverse().join('');
}