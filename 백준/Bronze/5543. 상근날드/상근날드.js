const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [상, 중, 하, 콜라, 사이다] = input.split('\n').map(Number);
const SET_DISCOUNT_PRICT = 50;

const minBurgerPrice = Math.min(상, 중, 하);
const minBaveragePrice = Math.min(콜라, 사이다);

console.log(minBurgerPrice + minBaveragePrice - SET_DISCOUNT_PRICT)