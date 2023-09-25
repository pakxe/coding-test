const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]); // 삼각형 높이
/*
제일 밑줄의 모든 수에서 타고 올라오는 수를 합하여 이 수들을 비교하면 된다.

제일 밑 항을 하나씩 돈다(개수는 split해서 안다)
그리고 밑항에서 하나씩 올라온다. (제일 처음 주는 값)

만약 밑 항이 0번 위치라면 0번으로밖에 못올라온다(위
오른쪽 끝 항이면 -1항으로밖에 못올라온다(왼쪽 대각선위ㅒ
그 외는 위, 왼쪽 대각성 위 둘 다 가능하다. 

중간 항은 위와 왼쪽 대각선 항을 비교하여 올라온다


그렇게 구한 값은 푸시해둔다.

맥스 출력

*/
const pyramid = new Array(n).fill().map(() => []);
const dp = new Array(n).fill().map((_, i) => new Array(i + 1).fill(0));

// 피라미드 만들기
for (let i = 1; i <= n; i++) {
	const curRow = input[i].split(' ').map(Number);
	pyramid[i - 1].push(...curRow);
}

let max = null;

dp[0][0] = pyramid[0][0]; // 위 꼭짓점 값

for (let i = 1; i < n; i++) {
	// 가로 변
	for (let j = 0; j < dp[i].length; j++) {
		// 단위 개수
		if (j === 0) {
			// 제일 왼쪽
			dp[i][j] = dp[i - 1][j] + pyramid[i][j];
		} else if (j === dp[i].length - 1) {
			// 제일 오른쪽
			dp[i][j] = dp[i - 1][j - 1] + pyramid[i][j];
		} else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + pyramid[i][j];
	}
}

console.log(Math.max(...dp[n - 1]));

/**
 * 순환은 col -> row로 해야한다.
 * 변부터
 */
