const solution = (k, score) => {
  const rank = [];
  const resultArr = [];

  score.forEach((curScore) => {
    if (rank.length < k) {
      rank.push(curScore);
    } else if (Math.min(...rank, curScore) !== curScore) {
      const minIndex = rank.indexOf(Math.min(...rank));
      rank[minIndex] = curScore;
    }
    resultArr.push(Math.min(...rank));
  });

  return resultArr;
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
/**
 * k개가 안채워졌을 때는 그냥 push 한다.
 * 그 이상일 때는 랭킹 + 현재값의 최소값을 구해 현재값이 최소값이 아니면 대체해야하므로
 */
