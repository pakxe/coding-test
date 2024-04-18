const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [height, width] = input[0].split(' ').map(Number);
const map = new Array(height).fill();

for (let i = 0; i < height; i++) {
  map[i] = input[i + 1].split('').map(Number);
}

let maxSize = -Infinity;

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[0].length; x++) {
    const targetValue = map[y][x];

    const rowLocations = [];
    const colLocations = [];
    let size = -Infinity;

    for (let nx = x; nx < map[0].length; nx++) if (map[y][nx] === targetValue) rowLocations.push(nx - x + 1);
    rowLocations.forEach((location) => {
      if (y + location - 1 < map.length && map[y + location - 1][x] === targetValue) colLocations.push(location);
    });

    colLocations.forEach((location) => {
      if (map[y + location - 1][x + location - 1] === targetValue) size = location;
      // for (let nx = x; nx < map[0].length; nx++) {
      //   if (map[absoluteY][nx] === targetValue) {
      //     console.log(absoluteY, nx, targetValue, location);
      //     size = location;
      //   }
      // }
    });

    maxSize = Math.max(maxSize, size);
  }
}

console.log(maxSize ** 2);
/**
 * 값을 선택한다.
 * 해당 행에서 이 값이 존재하는 좌표를 상대 좌표로 받아온다.(자신은 1로한다.)
 * 해당 열에서  ''
 * 선택된 열에서도 해당 행에서 값이 존재하는 상대 좌표를 받아온다.
 * 이 3개의 배열에서 모두 존재하는 값이 정사각형의 한 변의 길이다.
 */
