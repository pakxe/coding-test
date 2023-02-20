function solution(X_NUM, Y_NUM) {
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);
  const duo = [];
  X_NUM.split('').forEach((num) => xArr[parseInt(num)]++);
  Y_NUM.split('').forEach((num) => yArr[parseInt(num)]++);

  for (let i = 9; i >= 0; i--) {
    const duoCount = Math.min(xArr[i], yArr[i]);

    for (let j = 0; j < duoCount; j++) {
      duo.push(i);
    }
  }

  // 짝꿍이 없는 경우
  if (duo.length === 0) return '-1';

  // 모든 짝꿍이 0인경우
  const has0 = new Set([...duo]);
  if (has0.size === 1 && has0.has(0)) return '0';
  return duo.join('');
}

console.log(solution('123', '123'));
