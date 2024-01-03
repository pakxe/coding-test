const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const prices = input.shift().split(' ');
const cars = input.map((history) => history.split(' '));
/*
상근이는 3개의 차량을 무조건 갖고 있음. 
다만 이 차량이 나가고 들어오는 시간이 다르므로 현재의 차량 개수에 따라서
주차요금이 계속 변동되는 것이 문제

1분부터 100까지의 시간을 보고 현재 차량 개수를 구하는것이 맞을듯

for 1 ~ 100
    현재 있는 차량 개수 세기 

*/

function getCarCount(currentTime) {
  let count = 0;

  cars.forEach((car) => {
    const [inTime, outTime] = car;

    if (inTime <= currentTime && outTime > currentTime) count += 1;
  });

  return count;
}

let cost = 0;

for (let time = 1; time < 100; time++) {
  const carCount = getCarCount(time);

  if (carCount === 0) continue;

  cost += prices[carCount - 1] * carCount;
}

console.log(cost);
