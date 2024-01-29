/*
농구는 48분동안 진행된다. 따라서 시간의 단위 m 의 최대는 47, s의 최대는 59

이기고 있던 시간을 재야하는건데, 



*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = Number(input[0]);

input.push('0 48:00');

// // 시간 더하기 빼기 계산기
// function calculator(a, b, mode) {
//     let [minA, secA] = a
//     let [minB, secB] = b

//     // a > b 이도록 수정
//     if(minA < minB || (minA === minB && secA < secB)) [minA, secA, minB, secB] = [minB, secB, minA, secA]; // 교환

//     if(mode === 'add') {
//         return secA + secB < 60 ? [minA + minB, secA + secB] : [minA + minB + 1, secA + secB - 60];
//     }

//     if(mode === 'sub') {
//         if(secB > secA) [minA, secA] = [minA - 1, secA + 60];

//         return [minA - minB, secA - secB];
//     }
// }

function timeToSec(time) {
  const splitTime = time.split(':').map(Number);

  return splitTime[0] * 60 + splitTime[1];
}

function secToTimeStr(onlySec) {
  const [min, sec] = [Math.floor(onlySec / 60), onlySec % 60];

  return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
}

let scores = [0, 0];
let times = [0, 0]; //초로만 다루자
// 초기화 작업
const [firstGoalTeam, firstGoalTime] = input[1].split(' ');
let lastTime = timeToSec(firstGoalTime);
scores[firstGoalTeam - 1] += 1;

for (let i = 2; i <= count + 1; i++) {
  // 마지막에 push 한 48:00까지 도달
  let [goalTeam, goalTime] = input[i].split(' ');
  goalTime = timeToSec(goalTime);

  if (scores[0] > scores[1]) times[0] += goalTime - lastTime;
  if (scores[0] < scores[1]) times[1] += goalTime - lastTime;

  lastTime = goalTime;
  if (goalTeam !== '0') scores[goalTeam - 1] += 1;
}

console.log(secToTimeStr(times[0]));
console.log(secToTimeStr(times[1]));
