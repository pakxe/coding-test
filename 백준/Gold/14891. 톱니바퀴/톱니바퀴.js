/*
맞닿는 좌표인 0부터 시작한 2, 6에 대해서만 생각할 것. 

만약 1번 톱니면 6은 신경쓰지 않고 4번 톱이면 2를 신경쓰지 않는다.

단일 톱니 회전(번호, 방향)
    여기서 양쪽 톱니를 신경쓴다. 
    기존 톱니의 6번이 번호 -1번의 톱니의 2번과 다른 극일경우 단일 톱니 회전(!방향)
    
    기존 톱니의 2번이 번호 +1번의 톱니의 6번과 다른 극일 경우 단일 톱니 회전(!방향)

점수 계산() {
    모든 톱니의 0번을 살펴보고 계산한다. 2 ^ (i) 로 계산한다. 
}
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, S] = [0, 1];
const CLOCK_WISE = 1;
const COUNTER_CLOCK_WISE = -1;

const GEAR_COUNT = 4;
const SAW_TOOTH_COUNT = 8;

const gearList = [];

class Gear {
  #poleList;

  constructor(poleList) {
    this.#poleList = poleList;
  }

  rotate(rotationDirection) {
    if (rotationDirection === CLOCK_WISE) this.rotateClockWise();
    else if (rotationDirection === COUNTER_CLOCK_WISE) this.rotateCounterClockWise();
  }

  rotateClockWise() {
    const newPoleList = [this.#poleList[SAW_TOOTH_COUNT - 1]];

    for (let i = 0; i < SAW_TOOTH_COUNT - 1; i++) {
      newPoleList.push(this.#poleList[i]);
    }

    this.#poleList = newPoleList;
  }

  rotateCounterClockWise() {
    const newPoleList = [];

    for (let i = 1; i < SAW_TOOTH_COUNT; i++) {
      newPoleList.push(this.#poleList[i]);
    }

    newPoleList.push(this.#poleList[0]);

    this.#poleList = newPoleList;
  }

  getLeft() {
    return this.#poleList[(SAW_TOOTH_COUNT / 2 / 2) * 3];
  }

  getRight() {
    return this.#poleList[SAW_TOOTH_COUNT / 2 / 2];
  }

  getTop() {
    return this.#poleList[0];
  }

  co() {
    console.log(this.#poleList);
  }
}

function reverseRotationDirection(rotationDirection) {
  if (rotationDirection === CLOCK_WISE) return COUNTER_CLOCK_WISE;
  else if (rotationDirection === COUNTER_CLOCK_WISE) return CLOCK_WISE;
}

function isReversePole(pole1, pole2) {
  return pole1 !== pole2;
}

function propagateLeft(gearIndex, rotationDirection) {
  const curGear = gearList[gearIndex];
  const leftGear = gearIndex !== 0 ? gearList[gearIndex - 1] : null;

  if (gearIndex !== 0 && isReversePole(curGear.getLeft(), leftGear.getRight())) {
    propagateLeft(gearIndex - 1, reverseRotationDirection(rotationDirection));
  }

  curGear.rotate(rotationDirection);
}

function propagateRight(gearIndex, rotationDirection) {
  const curGear = gearList[gearIndex];
  const rightGear = gearIndex !== GEAR_COUNT - 1 ? gearList[gearIndex + 1] : null;

  if (gearIndex !== GEAR_COUNT - 1 && isReversePole(curGear.getRight(), rightGear.getLeft())) {
    propagateRight(gearIndex + 1, reverseRotationDirection(rotationDirection));
  }

  curGear.rotate(rotationDirection);
}

function rotateGear(gearIndex, rotationDirection) {
  const curGear = gearList[gearIndex];
  const leftGear = gearIndex !== 0 ? gearList[gearIndex - 1] : null;
  const rightGear = gearIndex !== GEAR_COUNT - 1 ? gearList[gearIndex + 1] : null;

  if (leftGear !== null && isReversePole(curGear.getLeft(), leftGear.getRight()))
    propagateLeft(gearIndex - 1, reverseRotationDirection(rotationDirection));
  if (rightGear !== null && isReversePole(curGear.getRight(), rightGear.getLeft()))
    propagateRight(gearIndex + 1, reverseRotationDirection(rotationDirection));

  curGear.rotate(rotationDirection);
}

function calcTotalScore() {
  return gearList.reduce((sum, gear, i) => {
    const gearTop = gear.getTop();

    if (gearTop === N) return sum;
    else if (gearTop === S) return sum + 2 ** i;
  }, 0);
}

let i = 0;

for (; i < GEAR_COUNT; i++) {
  const gear = new Gear(input[i].split('').map(Number));

  gearList.push(gear);
}

const ROTATION_COUNT = input[i++];

for (; i < input.length; i++) {
  const [gearIndex, rotationDirection] = input[i].split(' ').map(Number);

  rotateGear(gearIndex - 1, rotationDirection);
}

const totalScore = calcTotalScore();

console.log(totalScore);
