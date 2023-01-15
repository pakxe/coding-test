function solution(_, m, score) {
  let totalGain = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i <= score.length - m; i += m) {
    const appleBox = score.slice(i, i + m);
    totalGain += appleBox[appleBox.length - 1] * m;
  }
  return totalGain;
}
// 사과 한 상자의 가격은 제일 낮은 품질인 사과 값 * 개수
