function solution(brown, yellow) {
    const dividers = getDividers(yellow);
    const row_col = (brown - 4)/2;
    
    const result = dividers.filter(([row, col]) => row + col === row_col);
    [row, col] = result[0];
    return [row + 2, col + 2];
}

const getDividers = num => {
    const dividers = [];
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            dividers.push([num / i , i])
        }
    }
    return dividers;
}
/*
    노랑의 약수들을 구한다.
    모서리를 제외하기 위해 갈색 - 4
    가로 + 세로를 구하기 위해 갈색 / 2
    
    앞서 구한 노랑 약수 짝들이 더해서 갈색(가로 + 세로)가 되는 값을 구한다.
    이 값 + 2씩 하면 카펫 가로, 세로
*/