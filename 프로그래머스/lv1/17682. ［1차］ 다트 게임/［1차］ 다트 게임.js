const N = 3;
const BONUS = ['S', 'D', 'T'];

function splitByNumber(str) {
  return str.match(/\d+\D+/g);
}

function solution(dartResult) {
  const scores = new Array(N).fill(0);

  const splitResult = splitByNumber(dartResult);

  splitResult.forEach((game, i) => {
    scores[i] = Number(game.match(/\d+/g)); // 0번째는 점수
    const bonus = BONUS.indexOf(game.match(/[a-zA-Z]+/g)[0]) + 1;

    scores[i] = scores[i] ** bonus;

    if (game.split('').includes('*') || game.split('').includes('#')) {
      if (game.split('').includes('*')) {
        if (i === 0) scores[0] = scores[0] * 2;
        else {
          scores[i] = scores[i] * 2;
          scores[i - 1] = scores[i - 1] * 2;
        }
      }
      if (game.split('').includes('#')) {
        scores[i] = scores[i] * -1;
      }
    }
  });
  console.log(scores);
  return scores.reduce((sum, cur) => (sum += cur), 0);
}
// 문자열에서 숫자만 뽑아내는 코드를 알려줘.
console.log(solution('1D2S#10S'));

//1S2D*3T
