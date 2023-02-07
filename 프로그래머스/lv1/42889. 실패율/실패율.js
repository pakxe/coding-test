function solution(N, stages) {
  const sortedUser = stages.sort((a, b) => a - b); // 오름차순 정렬
  const failureRates = new Array(N).fill(0);

  for (let i = 1; i <= N; i++) {
    const failureUsers = sortedUser.indexOf(i) !== -1 ? sortedUser.lastIndexOf(i) - sortedUser.indexOf(i) + 1 : 0;
    const upperUsers = sortedUser.indexOf(i) !== -1 ? sortedUser.length - sortedUser.indexOf(i) : 0;

    failureRates[i - 1] = failureUsers ? failureUsers / upperUsers : 0;
  }
  console.log(failureRates);
  return failureRates
    .map((_, index) => index)
    .sort((a, b) => failureRates[b] - failureRates[a])
    .map((a) => a + 1);
}

/**
 * 1. 몇명이 해당 스테이지에 있는지 확인한다.(클리어하지 못했는지)
 * 2. 몇명이 해당 스테이지를 통과했는지 확인한다.
 */


