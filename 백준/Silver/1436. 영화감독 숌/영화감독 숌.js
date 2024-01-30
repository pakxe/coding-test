/*
666
1666
2666
3666
4666
5666
6660
6661
6662
6663
6664
6665
6666
6667
6668
...

N까지 세는데 이때 666이 들어가있는 수를 뽑아내는 완탐으로 해야하지 않을까 싶다. 

1. 그냥 1부터 N까지 for를 돌리고 666이 있는 수를 걸러낸다. 2초 안에 안되려나?
아.. 666이 있는 수가 N까지인거고 그냥 for로 1부터 돌면 10000보다 큰 수겠군 천에 하나씩 있다고 하면 10000 * 1000
이라서 굉장히 큰 시간이 걸릴 것 같다. 

2. 0~9999까지의 수를 사이사이에 넣어주면 되지 않을까. 그리고 이 종말의 수 배열의 길이가 .. 아 근데 그러면 안되겟구나. 
N까지 해도 그 사이에 비어있는 수가 있을 수 있어서. 결국 
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const [N] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const arr = [];
for (let i = 1; ; i++) {
  // console.log(arr);
  if (arr.length === N) break;

  if (i.toString().includes('666')) arr.push(i);
}

console.log(arr[N - 1]);
