
function solution(number, limit, power) {
  const arr = new Array(number).fill(0).map((_, i) => i + 1);
  const attackPowerList = arr.map((a) => getDivisors(a));

  return attackPowerList.reduce((totalWeight, eachPower) => {
    if (eachPower > limit) totalWeight += power;
    else totalWeight += eachPower;
    return totalWeight;
  }, 0);
}

const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }

  return divisors.length;
};
